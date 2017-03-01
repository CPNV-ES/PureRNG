import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:'#474747',
    },
    roulettePlaceholder:{
        marginTop : 20,
        width: 425,
        height: 48,
        marginRight: 10,
        marginBottom: 15,
        overflow: 'hidden',
        borderWidth: 1.3,
        borderColor: '#3f3f3f',
        justifyContent:'center',
        alignItems: 'center',
    },
    triangleO: {
        marginBottom: -5,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 14,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#616161'
    },
    triangle: {
        marginBottom: -20,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 11,
        borderRightWidth: 11,
        borderBottomWidth: 22,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#f3f3f3'
    },
    MainViewContent:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    white: {
        color: 'white',
    },

});