import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    icon: {
        color: '#ffffff',
        fontSize: 28,
    },
    button: {
        position: 'absolute',
        bottom: 22,
        left: Dimensions.get('window').width / 2 - 32,

        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,

        backgroundColor: '#bc556a',
        borderRadius: 32,
        elevation: 5,
    }
})