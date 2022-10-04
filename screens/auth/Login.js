import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import style from './styles/style';
import auth from '@react-native-firebase/auth';

import img from '../../assets/insta.png';

const Login = ({navigation}) => {
  const [valid, setValid] = useState(true);
  const [btn, setbtn] = useState(true);
  const [load, setload] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const validate = () => {
    if (email != '' && pass != '') {
      setValid(false);
      setbtn(false);
    } else {
      setValid(true);
      setbtn(true);
    }
  };

  const loginauth = async () => {
    try {
      const data = await auth().signInWithEmailAndPassword(email, pass);

      if (data.user.emailVerified == false) {
        navigation.replace('Verify');
      } else {
        navigation.replace('Home');
      }
    } catch (err) {
      console.log(err);
      if (err.code == 'auth/invalid-email') {
        alert('Invalid Email id');
      } else if (err.code == 'auth/user-not-found') {
        alert('Inavlid Email Or Password');
      } else {
        alert('Inavlid Email Or Password');
      }
    }
  };

  return (
    <ScrollView
      style={style.body}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={style.authbox}>
        <View style={style.loginbox}>
          <Image source={img} style={style.logo} resizeMode="contain" />
          <TextInput
            style={style.input}
            placeholder="Email Or Username"
            selectionColor={'#fff'}
            onChangeText={val => {
              setEmail(val);
            }}
            onKeyPress={() => {
              validate();
            }}
          />
          <TextInput
            style={style.input}
            placeholder="Password"
            secureTextEntry={true}
            selectionColor={'#fff'}
            onChangeText={val => {
              setPass(val);
            }}
            onKeyPress={() => {
              validate();
            }}
          />
          <TouchableOpacity
            style={btn ? style.dbtn : style.btn}
            disabled={btn}
            underlayColor="transparent"
            onPress={loginauth}>
            {load ? (
              <ActivityIndicator />
            ) : (
              <Text style={{fontSize: 18}}>Login</Text>
            )}
          </TouchableOpacity>

          <View style={style.fpass}>
            <Text style={style.fptxt}>Forgot your login details?</Text>
            <Text style={style.gofpass}>Get help logging in.</Text>
          </View>
        </View>
        <View style={style.signup}>
          <Text style={style.fptxt}>Dont have a Account?</Text>
          <Text
            style={style.gosignup}
            onPress={() => navigation.navigate('Signup')}>
            Signup Now
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
