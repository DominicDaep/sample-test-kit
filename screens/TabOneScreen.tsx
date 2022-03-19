import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';



export default function TabOneScreen() {
return (
  <View
  style={{
    backgroundColor: '#1A374D',
    height: '100%'
  }}
>
  
            <Text style={{ 
                fontSize: 40, 
                textAlign: 'center', 
                color: '#AEFEFF',
                paddingHorizontal: 10,
                paddingTop: 90
             
                 }}>
            Sign Up
          </Text>

          <View
      style={{
        alignSelf: 'center',
      
        height: 100,
        width: 100,
 
        
        
      }}
      >
        <Image
        style={{
          height: 100,
          width: 100,
          paddingBottom: '10%',
         
        }}
        source={{
          uri:'https://img.icons8.com/external-bearicons-blue-bearicons/344/external-sign-up-call-to-action-bearicons-blue-bearicons-1.png'
        }}
      />

      </View>

      <View style={{
            flex: 100,
            paddingTop: 50,
            paddingBottom: 0
          }}>
            <View style={{
              flex: 0,
              alignItems: 'center',
              width: '100%'

            }}>
             
            <TextInput 
            style={style.input}
            placeholder={"Email Address"}
            />
      
            </View>

            <Text style={{
              paddingTop: 0,
              color: '#E83A14',
              textAlign: 'left',
              paddingHorizontal: 20,
              paddingBottom: 20
            }}>Required</Text>
    
            <View style={{
              marginBottom: 4,
              alignItems: 'center',
              
              
            }}>
             
             <TextInput 
            style={style.input}
            placeholder={"Password"}
            secureTextEntry={true}
          />
            </View>
            <Text style={{
              paddingTop: 0,
              color: '#E83A14',
              textAlign: 'left',
              paddingHorizontal: 20,
              paddingBottom: 20

            }}>Required</Text>

            <View style={{
              marginBottom: 4,
              alignItems: 'center',
              
              
            }}>
             
             <TextInput 
            style={style.input}
            placeholder={"Confirm Password"}
            secureTextEntry={true}
          />
            </View>
            <Text style={{
          
              color: '#E83A14',
              textAlign: 'left',
              paddingHorizontal: 20,
              paddingTop: 0,
              paddingBottom: 20
            }}>Required</Text>
            

     
               <View style={{
                 paddingTop: 50
               }}>
               <Button
                 title={"Sign Up"}
                 buttonStyle={{
                 backgroundColor: '#56BBF1',
                 width: '70%',
                 alignSelf:"center",
                 borderRadius: 10,
                
                }}
                type={"solid"}
                >
              </Button>
              <Text style={{
                color:'white',
                textAlign:'right',
                paddingHorizontal: 50,
                paddingTop: 9
              }}
              >Already registered Sign in?</Text> 
              

              
               </View>
             
          </View>

      
    </View>
)
}

const style = StyleSheet.create({
  container: {

    backgroundColor: '#1A374D',
    justifyContent: 'center',
  
    width: '100%'
  },
  input: {
    height: 40,
    width: '90%',
    margin: 1,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#B8FFF9',
    borderRadius: 10,
   color: '#062C30'

  },
});