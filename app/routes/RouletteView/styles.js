import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:'#616161',
    },
    roulettePlaceholder:{
        marginTop : 5,
        alignSelf: 'stretch',
        height: 43,
        marginBottom: 5,
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
        color: '#fff',
        fontWeight: '100',
        fontFamily:'sans-serif-light',
    },
    titles: {
        flexDirection:'row',
        alignItems: 'stretch',
        justifyContent:'space-between',
    }
});