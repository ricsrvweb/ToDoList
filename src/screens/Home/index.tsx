import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, FlatList, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');
    const [createCount, setCreateCount] = useState<number>(0);
    const [doneCount, setDoneCount] = useState<number>(0);

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, taskName]);
        setTaskName('');
        setCreateCount(prevState => prevState + 1);
    }

    function handleTaskRemove(name: string, command: boolean) {
        Alert.alert("Remover", `Remover a tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== name))
                    setCreateCount(prevState => prevState - 1)
                    if (!command) {
                        setDoneCount(prevState => prevState - 1);
                    }
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleTaskUpdate(command: boolean) {
        if (!command) {
            setDoneCount(prevState => prevState - 1);
        } else {
            setDoneCount(prevState => prevState + 1);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.spacetop}>
                    <Image
                        source={require('../../../assets/Logo.png')}
                    />

                </View>
                <View style={styles.spacebottom}>
                    <View style={styles.list}>
                        <View style={styles.infoCreate}>
                            <Text style={styles.textlistleft}>
                                Criadas
                            </Text>
                            <View style={styles.number}>
                                <Text style={styles.textNumber}>{createCount}</Text>
                            </View>
                        </View>
                        <View style={styles.infoDone}>
                            <View >
                                <Text style={styles.textlistright}>
                                    Concluídas
                                </Text>
                            </View>
                            <View style={styles.number}>
                                <Text style={styles.textNumber}>{doneCount}</Text>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        data={tasks}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <Task
                                key={item}
                                content={item}
                                onRemove={(command) => handleTaskRemove(item, command)}
                                onUpdate={(command) => handleTaskUpdate(command)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles.tasklist}>
                                <Image
                                    source={require('../../../assets/Clipboard.png')}
                                />
                                <Text style={styles.listEmptyText}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.listEmptyTextabove}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                        onChangeText={setTaskName}
                        value={taskName}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Image
                            source={require('../../../assets/button_add.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}