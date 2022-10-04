import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import logo from './assets/instasplash.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      if (auth().currentUser == null) {
        navigation.replace('Login');
      } else if (auth().currentUser.emailVerified == false) {
        navigation.replace('Verify');
      } else if (auth().currentUser.emailVerified == true) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    }, 4000);
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <ActivityIndicator size="large" color="#1467d2" />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    opacity: 0.8,
  },
});
