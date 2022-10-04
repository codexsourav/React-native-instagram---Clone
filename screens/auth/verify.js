import {View, ToastAndroid, Image, Text, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import img from '../../assets/mail.png';
import style from './styles/verifycss';
import {SafeAreaView} from 'react-native-safe-area-context';

const Verify = ({navigation}) => {
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (auth().currentUser == null) {
      navigation.replace('Home');
    }
  }, []);

  // lesson email vifu or not

  var lesion = setInterval(() => {
    if (auth().currentUser != null) {
      if (auth().currentUser.emailVerified === true) {
        ToastAndroid.show(
          'Your Account Is successfully Verifed!',
          ToastAndroid.SHORT,
        );
        clearInterval(lesion);
        clearInterval(btnstart);
        navigation.replace('Splash');
      } else {
        auth().currentUser.reload();
      }
    } else {
      clearInterval(lesion);
    }
  }, 5000);

  // resend mail
  const sendmail = () => {
    if (auth().currentUser != null) {
      auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          setBtn(true);

          ToastAndroid.show('Your Email Is Send!', ToastAndroid.SHORT);
        })
        .catch(err => {
          console.log(err.code);
          if (err.code == 'auth/too-many-requests') {
            ToastAndroid.show(
              'Your Have Too Many Try ! Try Again Later',
              ToastAndroid.SHORT,
            );
          } else {
            ToastAndroid.show('Sumthing Want wrong!', ToastAndroid.SHORT);
          }
        });
    }
  };

  // Resvd Counter

  if (btn === true) {
    let count = 30;
    if (count != 0) {
      var btnstart = setInterval(() => {
        count = count - 1;
        if (count == 0) {
          clearInterval(btnstart);
          setBtn(false);
        }
        console.log(count);
      }, 1000);
    }
  }
  // logout btn
  const logout = () => {
    clearInterval(lesion);
    clearInterval(btnstart);
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Splash');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={style.body}>
      <View style={style.content}>
        <Image style={style.logo} source={img} resizeMode="contain" />
        <Text style={style.title}>Please Verify Your Email ID</Text>
        <Button onPress={sendmail} disabled={btn} title="Resend Mail" />
        <Text onPress={logout} style={style.logout}>
          Logout
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Verify;
