import * as React from "react";
import { View } from "react-native";
import { Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";

export default function Header(){
    return (
      
                  <View 
                  style ={{
                    backgroundColor:'#334443',
                    paddingTop: 0,
                    width: '90%',
                    alignSelf: "center",
                   
                  }}
                  >
                   <Text style={{ 
                          fontSize: 30, 
                          textAlign: 'center', 
                          color: '#80ED99',
                          paddingHorizontal: 10,
                          paddingTop: 0
                      
                          }}>
                      Create Account
                    </Text>
                        <Image
                        style={{
                          
                            height: 100,
                            width: 100,
                            paddingBottom: '10%',
                            alignSelf: "center",
                            paddingTop: 10
                            
                        }}
                        source={{
                          uri: 'https://img.icons8.com/cotton/344/gender-neutral-user--v1.png'
                        }} />
                        
                  </View>
          
                      
    )
}