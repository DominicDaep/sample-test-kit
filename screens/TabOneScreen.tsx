import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';
import Header from "../components/LoginForm/Header";
import Inputs from "../components/LoginForm/Inputs";

export default function TabOneScreen() {
 

  return (
    <View
      style={style.container}
    >
  
      <Header />

     <Inputs />
      <View style={{
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
      }}>
        <Text style={{
          fontSize: 18,
          color:'#6998AB'
        }}>
          Don't haved account?
        </Text>
      </View>
    </View>
  );
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