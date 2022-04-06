import * as React from "react";
import { Fragment, useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from "yup";
import ViewWithLoading from "../ViewWithLoading";
import SignIn from "./SignIn";
import Header from "..//LoginForm/Header";






export default function Inputs(){
  const [visible, setVisible] = useState<boolean>(false);
    const [loading, setloading]= useState(false)

    const [password, SetpasswordText] = React.useState<string>("");
    const [confirmpassword, SetconfirmpasswordText] = React.useState<string>("");

    const Signup = () =>{
        const EmailAddress = "";
        const Password = "";

      // error trapping
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
    
    return(
        <View style={{
            flex: 1,
            paddingTop: 50,
            paddingBottom: 20,
            backgroundColor:'#80ED99',
            
            
        }}>
         <ViewWithLoading loading={loading}>
        
<Header />

          <View style={{
            backgroundColor:'#334443',
            paddingTop: 0,
            width: '90%',
            alignSelf: "center",
            

          }}>

          
                
                 <ScrollView
                        contentContainerStyle={{
                                   flexGrow:1
                                }}
                        showsVerticalScrollIndicator={false}
                        >
                                  
            <Formik
                initialValues={{
                    Firstname: '',
                    Lastname: '',
                    email: '',
                    password: '',
                    confirmpassword:''
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                }}
                validationSchema={loginSchema}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <Fragment>

                    

              <KeyboardAvoidingView>
             
                        <View style={{
                           paddingTop: 10,
                           paddingHorizontal: 15,
                           paddingBottom: 0,
                           width: '90%',
                           alignSelf:"center"
                        }}>
                            <TextInput
                                label="Enter your Firstname"
                                value={values.Firstname}
                                onChangeText={handleChange('Firstname')}
                                autoComplete={false}
                                mode={"outlined"}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.Firstname ? true : false}
                            />
                            {errors.Firstname &&
                                <Text>
                                    {errors.Firstname}
                                </Text>
                            }
                        </View>
                        
                        <View style={{
                           paddingTop: 0,
                           paddingHorizontal: 15,
                           paddingBottom: 0,
                           marginBottom: 4,
                           width: '90%',
                           alignSelf:"center"
                        }}>
                          
                            <TextInput
                              placeholderTextColor={'#F2FFE9'}
                                label="Enter your Lastname"
                                value={values.Lastname}
                                onChangeText={handleChange('Lastname')}
                                autoComplete={false}
                                mode={"outlined"}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.Lastname ? true : false}
                            />
                            {errors.Lastname &&
                                <Text>
                                    {errors.Lastname}
                                </Text>
                            }
                        </View>
                        <View style={{
                           paddingTop: 0,
                           paddingHorizontal: 15,
                           paddingBottom: 0,
                           width: '90%',
                           alignSelf:"center"
                        }}>
                            <TextInput
                                label="Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                autoComplete={false}
                                keyboardType={"email-address"}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={"email"}
                                        color={"blue"}
                                    />
                                }
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.email ? true : false}
                            />
                            {errors.email &&
                                <Text>
                                    {errors.email}
                                </Text>
                            }
                        </View>

                        <View style={{
                           paddingTop: 0,
                           paddingHorizontal: 15,
                           paddingBottom: 0,
                           width: '90%',
                           alignSelf:"center"
                        }}>
                            <TextInput
                                label="Create Password"
                                value={values.password}
                                onChangeText={SetpasswordText}
                                autoComplete={false}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={visible ? "eye" : "eye-off"}
                                        onPress={() => {
                                            setVisible(!visible);
                                        }}
                                        color={"blue"}
                                    />
                                }
                                secureTextEntry={!visible}
                                error={errors.password ? true : false}
                            />
                            {errors.password &&
                                <Text>
                                    {errors.password}
                                </Text>
                            }
                        </View>

                        <View style={{
                            paddingTop: 0,
                            paddingHorizontal: 15,
                            paddingBottom: 0,
                            width: '90%',
                            alignSelf:"center",
                            
                        
                        }}>
                            <TextInput
                                label="Confirm Password"
                                value={values.confirmpassword}
                                onChangeText={SetconfirmpasswordText}
                                autoComplete={false}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={visible ? "eye" : "eye-off"}
                                        onPress={() => {
                                            setVisible(!visible);
                                        }}
                                        color={"blue"}
                                    />
                                }
                                secureTextEntry={!visible}
                                error={errors.confirmpassword ? true : false}
                            />
                            {errors.confirmpassword &&
                                <Text>
                                    {errors.confirmpassword}
                                </Text>
                            }
                        </View>

                     
          </KeyboardAvoidingView>
            
                 <SignIn />

                        <View style={{
                            flex: 0,
                        }}>

                         
                            </View>
                    </Fragment>
                )}
            </Formik>
            </ScrollView>
            </View>
            </ViewWithLoading>
        </View>

    )
}
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