import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    redBox:{
        width:40,
        height:40,
        backgroundColor: '#e57373',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Number:{
        fontSize: 11,
        color: '#f3f3f3',
    },
    blackBox: {
        width:40,
        height:40,
        backgroundColor: '#424242',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenBox: {
        width:40,
        height:40,
        backgroundColor: '#81c784',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        height:40,
        marginBottom:-12,
    },
    full_display: {
        flex:1,
        flexDirection:'row',
        overflow:'hidden',
    },
});
