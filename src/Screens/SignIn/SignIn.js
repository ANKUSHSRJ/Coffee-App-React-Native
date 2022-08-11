import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import logoImg from '../../../assets/logo.png'

import { useNavigation } from '@react-navigation/native'

const SignIn = () => {



  const [userName, setUserName] = useState();
  console.log("heyy",userName)
  function user() {


    navigation.navigate('HomeScreen', {
    itemId: userName,
      otherParam: 'anything you want here',
    });
    // console.log("hello brother");
  }


  const navigation = useNavigation();

  return (
    <View style={styles.Parent}>
      <Image source={logoImg}
        style={styles.Logo} />
      <TextInput
        placeholder="Select Username"
        style={styles.TextInp}
        onChangeText={newText => setUserName(newText)}
        value={userName}

      />
      <TextInput
        placeholder="Your email address"
        style={styles.TextInp}
      />
      <TextInput
        placeholder="Your password please"
        style={styles.TextInp}
      />

      <TouchableOpacity
        style={styles.Button}
        activeOpacity={0.3}

        onPress={user}

      ><Text style={{ color: "green" }}>Sign In</Text></TouchableOpacity>

      <View style={styles.Social}>
        <TouchableOpacity><Image source={require('../../../assets/fb.png')} style={{ height: 45, width: 45 }} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/google.png')} style={{ height: 45, width: 45 }} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/insta.png')} style={{ height: 45, width: 45 }} /></TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  TextInp: {
    height: 35,
    borderColor: "green",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 6
  },
  Parent: {
    margin: 6,
    marginTop: 200,
    padding: 5,
    justifycontent: 'center',
  },
  Logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
    alignSelf: "center",
    borderColor: '#DAF7A6',
    borderRadius: 100,
    borderWidth: 1

  },
  Button: {
    backgroundColor: '#DAF7A6',
    padding: 6,
    borderRadius: 5,
    alignItems: "center",
    height: 40,
    marginBottom: 10,

  },
  Social: {
    flexDirection: "row",
    justifyContent: "center",
  }

})



export default SignIn
