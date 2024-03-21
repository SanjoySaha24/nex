import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./pic/r.png')} 
          style={styles.logo}
        />
      </View>
      <View style={styles.spacee}></View>
      <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Welcome to our Health</Text>
      <View style={styles.spacee}></View>
      <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
        Unlock the power of personalization with our AI-driven recommendations tailored to you
      </Text>
      <View style={styles.space}></View>
      <View style={styles.buttonContainer}>
        <Button title="Continue with Google" color="rgb(24, 168, 240)"  />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Continue with Apple" color="rgb(24, 168, 240)" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Log In with Phone Number" color="rgb(24, 168, 240)" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Create Account" color="rgb(0, 119, 190)" />
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    
  },
  logo: {
    width: 400, 
    height: 300, 
    marginRight: 7, 
    marginTop:-100,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(24, 168, 240)', 
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  buttonContainer: {
    marginVertical: 10,
    width: '70%', 
    borderRadius: 15, 
    borderColor: 'black', 
    borderWidth: 3,
    overflow: 'hidden', 
  },
  spacee: {
    height: 10, // Adjust the height of the blank space as needed
  },
  space: {
    height: 40, // Adjust the height of the blank space as needed
  },

});
export default Login;
