import * as React from "react";
import { View } from "react-native";
import { Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";

export default function Header(){
    return (
        <View
      style={{
        height: 200,
        width: '100%',
        alignItems: 'center',
      }}
      >
        <Image
        style={{
          height: '100%',
          width: '90%',
          paddingBottom: '100%',
          borderRadius: 200,
        }}
        source={{
          uri:'https://miro.medium.com/max/1000/0*QvNoOUJpeBSJCExe.gif'
        }}
      />

      </View>
    )
}