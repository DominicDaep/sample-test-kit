import React, { useEffect, useState } from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';
import ViewWithLoading from "../components/ViewWithLoading";
import { Formik } from 'formik'



export default function TabOneScreen() {
const [loading, setloading]= useState(false)


    useEffect(() =>{
    setloading(true);
    setTimeout(() => {
    setloading(false);
    console.log(loading);
    }, 3000);
    },[])


return (  
  <ViewWithLoading loading={loading}>
<Formik
  initialValues={{
    FirstName:'',
    LastName:'',
    email: '',
    password: '',
  }}
  onSubmit={(values, action) =>{
        console.log(values);
  }}
>
{({ handleChange, values, errors, touched, handleSubmit } )=>(
  <KeyboardAvoidingView>

  <View
      style={{
        backgroundColor: '#80ED99',
        height: '100%',
        paddingLeft: 30,
        paddingTop: 60,
        paddingRight:30,
        paddingBottom: 1,
      }}
    >
    <View style={{
    flex: 10,
    paddingTop: 10,
    backgroundColor: '#334443',
    borderRadius: 30,
    }}>

    <Text style={{ 
      fontSize: 30, 
      textAlign: 'center', 
      color: '#80ED99',
      paddingHorizontal: 10,
      paddingTop: 10
   
       }}>
  Create Account
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
uri:'https://img.icons8.com/cotton/344/gender-neutral-user--v1.png'
}}
/>

</View>
<ScrollView
contentContainerStyle={{
flexGrow:1
        }}
showsVerticalScrollIndicator={false}
  
>
<View style={{
  flex: 100,
  paddingTop: 50,
  
 
}}>
  <View style={{
    flex: 0,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 10,
    
  }}
  >
    
   
  <TextInput 
  style={style.input}
  placeholderTextColor={'#F2FFE9'}
  value={values.FirstName}
  onChangeText={handleChange('FirstName')}
  placeholder={"First Name"}
  
  />
  </View>



  <View style={{
    marginBottom: 4,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 10,
     
  }}>
   
   <TextInput 
  style={style.input}
  placeholderTextColor={'#F2FFE9'}
  placeholder={"Last Names"}
  value={values.LastName}
  onChangeText={handleChange('LastName')}
/>
  </View>
 

  <View style={{
    marginBottom: 4,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 10
    
  }}>
   
   <TextInput 
  style={style.input}
  placeholderTextColor={'#F2FFE9'}
  value={values.email}
  onChangeText={handleChange('email')}
  placeholder={"Email Address"}
/>
  </View>

  <View style={{
    marginBottom: 4,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 10
    
  }}>
   
   <TextInput 
  style={style.input}
  placeholderTextColor={'#F2FFE9'}
  placeholder={"Password"}
  secureTextEntry={true}
  value={values.password}
  onChangeText={handleChange('password')}
/>
  </View>
  

  <View style={{
    marginBottom: 4,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 10
    
  }}>
   
   <TextInput 
  style={style.input}
  placeholderTextColor={'#F2FFE9'}
  placeholder={"Confirm Password"}
  secureTextEntry={true}
/>
  </View>
  
  
 


     <View style={{
       paddingTop: 50
     }}>
     <Button
       title={"Sign Up"}
       buttonStyle={{
       backgroundColor: '#80ED99',
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
    >Already Sign in? Click here</Text> 
    

    
     </View>
   
</View>
</ScrollView>
</View>
</View>

  </KeyboardAvoidingView>
    


)}

</Formik>
            

  </ViewWithLoading>
                
 )
}

const style = StyleSheet.create({
  container: {

    backgroundColor: '#4700D8',
    justifyContent: 'center',
    width: '100%',
    
  },
  input: {
    color:'#000',
    height: 40,
    width: '90%',
    margin: 1,
    padding: 5,
    borderRadius: 7,
  

  },
  Divider:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '50'
  }
});