import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    content: {
        flex: 1
    },
    grid: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        marginTop: 16,
        alignSelf: 'center' // Rare. It is not supposed to be necessary
    }
})