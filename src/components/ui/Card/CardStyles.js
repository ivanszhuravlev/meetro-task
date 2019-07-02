import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    card: {
        // width: '100%',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 10,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 16,
        marginHorizontal: 16,

        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 20
    },
    cardWrap: {
        marginTop: -19,
        // paddingBottom: 17,
        // opacity: 0.5,
        // overflow: 'visible'
    },
    first: {
        marginTop: 19
    }
})