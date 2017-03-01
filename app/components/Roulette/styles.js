import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    rouletteContainer:{
        flex: 1,
        flexDirection: 'row',
    },
    redBox:{
        width:45,
        height:45,
        backgroundColor: '#e57373',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Number:{
        fontSize: 11,
        color: '#f3f3f3',
    },
    blackBox: {
        width:45,
        height:45,
        backgroundColor: '#424242',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenBox: {
        width:45,
        height:45,
        backgroundColor: '#81c784',
        justifyContent: 'center',
        alignItems: 'center',
    }
});