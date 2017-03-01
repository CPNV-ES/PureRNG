import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ChoiceContent:  {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Signs : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    SignIn : {
      marginTop : 100,
    },

    SignUp : {
      marginTop : 100,
    },

    lblSignUp : {
      width:100,
    },

    txtSignUp : {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width:100,
    },

    usernameView : {
        flexDirection: 'row',
    },

    SignContent : {
        width : 200,
    },

    space : {
      marginLeft:100,
    },

    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    logpage:{
        flex:1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    logcontent:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    top:{
        height:140,
        backgroundColor:'#f3f3f3',
    },
    head: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    }
});
