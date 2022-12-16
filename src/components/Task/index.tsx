import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
    content: string;
    onRemove: (command: boolean) => void;
    onUpdate: (command: boolean) => void;
}

export function Task({ content, onRemove, onUpdate }: Props) {
    const [isChecked, setIsChecked] = useState(false);

    function handleIsChecked(command: boolean) {

        if (!command) {
            setIsChecked(true);
            { onUpdate(true) }
        } else {
            setIsChecked(false);
            { onUpdate(false) }
        }
    }

    function handleTaskRemove(command: boolean) {
        if (!command) {
            { onRemove(true) }
        } else {
            { onRemove(false) }
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleIsChecked(isChecked)}>
                <Image
                    source={isChecked ? require('../../../assets/check.png') : require('../../../assets/Vector.png')}
                />
            </TouchableOpacity>
            <Text style={isChecked ? styles.name_through : styles.name}>
                {content}
            </Text>
            <TouchableOpacity style={styles.buttontrash} onPress={() => handleTaskRemove(isChecked)}>
                <Image
                    source={require('../../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View >
    )
}