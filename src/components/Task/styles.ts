import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 54,
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        flex: 1,
        color: '#F2F2F2',
        fontSize: 16,
        marginLeft: 16,
    },
    name_through: {
        flex: 1,
        color: '#808080',
        fontSize: 16,
        marginLeft: 16,
        textDecorationLine: 'line-through'
    },
    button: {
        width: 36,
        height: 24,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    buttontrash: {
        width: 40,
        height: 24,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
});