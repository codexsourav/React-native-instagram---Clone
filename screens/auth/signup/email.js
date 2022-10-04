import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StackActions,
} from 'react-native';
import React, {useState} from 'react';
import joincss from './style/joincss';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {navPush} from '../../../navigate';

const Email = ({route, navigation}) => {
  const [valid, setValid] = useState(true);
  const [btn, setbtn] = useState(true);
  const [load, setload] = useState(false);
  const [email, setemail] = useState('');
  const [err, seterr] = useState('');

  const userinfo = route.params;

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  const validate = () => {
    if (validateEmail(email)) {
      setValid(false);
      setbtn(false);
    } else {
      setValid(true);
      setbtn(true);
    }
  };

  // add user firebase
  const addtofb = id => {
    const run = firestore().collection('users').doc(id).set({
      name: userinfo.uname,
      uname: userinfo.uname,
      bio: '',
      profile: '',
      followers: [],
      following: [],
      link: '',
    });
    if (run) {
      return true;
    } else {
      return false;
    }
  };

  const adduser = async () => {
    setload(true);
    setbtn(true);
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        userinfo.pass,
      );

      if (isUserCreated.additionalUserInfo.isNewUser == true) {
        setload(false);
        setbtn(false);

        const id = isUserCreated.user.uid;

        if (addtofb(id)) {
          navigation.replace('Verify');
        } else {
          seterr('Account Create Field');
        }
      }
      // console.log(isUserCreated);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        seterr('This email address is already in use!');
        setload(false);
        setbtn(false);
      }
      if (err.code === 'auth/invalid-email') {
        seterr('Invalid Email ID!');
        setload(false);
        setbtn(false);
      }
    }
  };

  return (
    <ScrollView style={joincss.body}>
      <View style={joincss.main}>
        <Text style={joincss.title}>Enter your email ID</Text>
        <Text style={joincss.des}>Enter a email id to verify your account</Text>
        <View>
          <TextInput
            style={joincss.input}
            placeholder="Email ID"
            selectionColor={'#fff'}
            onKeyPress={validate}
            onChangeText={val => {
              setemail(val);
            }}
            autoCapitalize={false}
            onEndEditing={validate}
          />
          <Text style={joincss.err}>{err}</Text>
        </View>
        <TouchableOpacity
          style={btn ? joincss.dbtn : joincss.btn}
          disabled={btn}
          underlayColor="transparent"
          onPress={() => {
            adduser();
          }}>
          {load ? (
            <ActivityIndicator />
          ) : (
            <Text style={{fontSize: 18}}>SEND EMAIL</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Email;
