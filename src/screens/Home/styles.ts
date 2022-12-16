import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacetop: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spacebottom: {
        flex: 4,
        backgroundColor: '#333333',
        padding: 24,

    },
    text: {
        color: '#FFF'
    },
    form: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        paddingTop: 140,
        paddingLeft: 24,
        paddingRight: 24,
    },
    input: {
        flex: 1,
        width: 271,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        marginRight: 4,
        color: '#F2F2F2'
    },
    button: {
        width: 54,
        height: 54,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
        height: 40,
        width: '100%'
    },
    textlistleft: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
    },
    textlistright: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold',
    },
    infoCreate: {
        flexDirection: 'row',
        width: '50%',
    },
    infoDone: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end'
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15
    },
    listEmptyTextabove: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    },
    tasklist: {
        alignItems: 'center'
    },
    number: {
        backgroundColor: '#808080',
        width: 20,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 10
    },
    textNumber: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right'
    },

});