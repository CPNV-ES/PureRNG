import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:'#474747',
    },
    roulettePlaceholder:{
        marginTop : 20,
        width: 425,
        height: 40,
        marginRight: 10,
        marginBottom: 15,
        borderWidth: 1.3,
        borderColor: '#3f3f3f',
        justifyContent:'center',
        alignItems: 'center',

    },
    rouletteContainer:{
        justifyContent:'center',
        alignItems: 'center',
        width:10,
        overflow: 'hidden',
    },
    triangleO: {
        marginBottom: -5,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#616161'
    },
    triangle: {
        marginBottom: -20,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 22,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#f3f3f3'
    },
    MainViewContent:{
        flex:4,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    white: {
        color: 'white',
    }
});