import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1A374D',
        justifyContent: 'center',
        paddingHorizontal: 20
      }}
    >
      <View style={{
        flex: 1,
      }}>
        
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 0
        }}>
         <Text style={{
          fontSize: 18,
          color: '#fff'
        }}>
          Email Address
        </Text>
          <View style={{
            backgroundColor:'#406882',
            height: 50,
            width: '100%',
            marginBottom: 20,
            borderRadius: 10
          }}>

          </View>
        </View>

        <View style={{
          flex: 0,
          marginBottom: 40
        }}>
          <Text style={{
          fontSize: 18,
          color: '#fff'
        }}>
          Password
        </Text>
          <View style={{
            backgroundColor:'#406882',
            height: 50,
            width: '100%',
            borderRadius: 10
          }}>

          </View>
        </View>
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <View style={{
              height: 50,
              width: '80%',
              justifyContent: 'center',
              paddingHorizontal: 90,
              alignItems: 'center',
              borderRadius: 100,
              alignSelf:'center',
              backgroundColor: '#6998AB'
              
            }}>
              <Text style={{
                fontSize: 18,
                color: '#fff'
              }}>
                Login
              </Text>
            </View>
          </View>
        </View>

      </View>
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 20
      }}>
        <Text style={{
          fontSize: 18,
          color:'#6998AB'
        }}>
          Create an account?
        </Text>
      </View>
    </View>
  );
}