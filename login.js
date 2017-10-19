import React, { Component } from 'react';
import{
 View,
 Dimensions,
 Text,
 StyleSheet,
} from 'react-native';
var width=Dimensions.get("window").width;
export default class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.headerImage} source={require('./images/mmp-login-head.png')}/>
            <View style={styles.textView}>
                <Image style={styles.icon} source={require('./images/login-id.png')}/>
                <TextInput   underlineColorAndroid='transparent' style={styles.textinput}  placeholder='请输入登录手机号'/>
            </View>
                <View style={styles.textView}>
                    <Image style={styles.icon} source={require('./images/login-pw.png')}/>
                    <TextInput   underlineColorAndroid='transparent' style={styles.textinput}  placeholder='请输入登录密码'/>
                </View>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>登录</Text>
                    </View>
                </View>



        )
    }
}
const styles=StyleSheet.create({
    container:{
       flex:1,
    },
    headerImage:{
        width:width,
        height:width*675/750,
    },
    textView:{
        paddingRight:15,
        paddingLeft:15,
        height:50,
        flexDirection:'row',
    },
    icon:{
        width:15,
        height:15
    },
    textinput:{
        marginLeft:10,
        height:40,
        width:200,
        borderBottomColor:'#000'
    },
    buttonView:{
        paddingRight:15,
        paddingLeft:15,
        height:55,
        borderRadius:10,
        backgroundColor:'#327ae6'
    },
    buttonText:{
        fontSize:13,
        color:'#ffffff',
        textAlign:'center'
    }

})