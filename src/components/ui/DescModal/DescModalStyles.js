import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    modal: {
        paddingTop: 18,
        paddingHorizontal: 16,
        paddingBottom: 32,

        borderRadius: 7,
        position: 'relative',

        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    modalWrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    heading: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
        padding: 0,
        color: '#626a7f',
    },
    textField: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#d0d4de',
        textAlignVertical: 'top',
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 18
    },
    submitButton: {
        alignSelf: 'flex-end',
    }
})