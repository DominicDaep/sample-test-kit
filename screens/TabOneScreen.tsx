import * as React from "react";
import { Fragment, useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from "yup";
import ViewWithLoading from "../components/ViewWithLoading";
import SignIn from "../components/LoginForm/SignIn";
import Header from "../components/LoginForm/Header";
import Inputs from "../components/LoginForm/Inputs";



export default function LoginForm() {
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setloading]= useState(false)

    const [password, SetpasswordText] = React.useState<string>("");
    const [confirmpassword, SetconfirmpasswordText] = React.useState<string>("");

    const Signup = () =>{
        const EmailAddress = "";
        const Password = "";
      // code for
       if (password === "" && confirmpassword === "" || password === "Create Password" && confirmpassword === "Confirm Password" ) {
        Alert.alert("Login Error", "Please fill the required fields")
       }
       else if ( confirmpassword  === password){
        Alert.alert("Account", "Successlly registered")
     } else{
        Alert.alert("Login Error", "password is unmatch")
     }


      }
    useEffect(() =>{
      setloading(true);
      setTimeout(() => {
      setloading(false);
      console.log(loading);
      }, 3000);
      },[])

    const loginSchema = yup.object({
      
        email: yup.string().required('This field is required')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                'Invalid email address'),
        password: yup.string().required('This field is required'),
        confirmpassword: yup.string().required('This field is required is required')
    });

    return (
//for the inputs where the header is inserted also the register button
      <View style={{
           flex: 1,
            paddingTop: 50,
            paddingBottom: 20,
            backgroundColor:'#80ED99',
      }}>
            <Inputs />
      </View>
      
    )
}
//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    overrideContainer: {
        backgroundColor: 'green'
    },
    textStyle: {
      color: '#334443',
      textAlign: 'center',
      paddingHorizontal: 50,
      paddingTop: 0

    },
    input: {
      height:32,
      width: '90%',
      margin: 4,
      borderWidth: 1,
      padding: 3,
      backgroundColor: '#fbfbfb',
      borderRadius: 10,
     color: '#062C30'
    },
});