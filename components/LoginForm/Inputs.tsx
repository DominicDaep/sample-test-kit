import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';


export default function Inputs(){
    const [email, SetEmailText] = React.useState<string>("");
    const [Password, SetPasswordText] = React.useState<string>("");
  
  
  const Login = () =>{
    const EmailAddress = "dhomwelldaep@gmail.com";
    const Password = "password123";
  
    if(email === EmailAddress && Password === Password){
       Alert.alert("Login", "Successfully Login")
    } else{
       Alert.alert("Login Error", "Wrong Email and Password")
    }
  }
    return(
        <View style={{
            flex: 100,
            paddingTop: 150,
          }}>
            <View style={{
              flex: 0,
              alignItems: 'center',
              width: '100%'
            }}>
              
            <TextInput 
            style={style.input}
            onChangeText={SetEmailText}
            value={email}
            placeholder={"Enter your Email Address"}
            />
      
            </View>
    
            <View style={{
              marginBottom: 4,
              alignItems: 'center',
              
              
            }}>
             
             <TextInput 
            style={style.input}
            onChangeText={SetPasswordText}
            value={Password}
            placeholder={"Enter your Password"}
            secureTextEntry={true}
          />
            </View>
              <View style={{
    
              }}>
              <Text style={{ 
                fontSize: 14, 
                textAlign: 'right', 
                color: '#AEFEFF',
                paddingHorizontal: 10,
                marginBottom: 40
                 }}>
            Forgot Password?
          </Text>
              </View>
    
              <Button
                 title={"Login"}
                 buttonStyle={{
                 backgroundColor: '#00C897',
                 width: '50%',
                 alignSelf:"center",
                 borderRadius: 20,
                 
                 
                 
                }}
                type={"solid"}
              
                onPress={()=>Login()}
                >
              </Button>
          </View>
    )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A374D',
      justifyContent: 'center',
      paddingHorizontal: 10,
      width: '100%'
    },
    input: {
      height: 40,
      width: '90%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#C1F8CF',
      borderRadius: 10,
     color: '#062C30'
  
    },
  });