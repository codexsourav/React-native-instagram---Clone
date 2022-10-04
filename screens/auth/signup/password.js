import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import joincss from './style/joincss';

function Password({route, navigation}) {
  const [valid, setValid] = useState(true);
  const [btn, setbtn] = useState(true);

  const [pass, setPass] = useState('');

  const validate = () => {
    if (pass.length >= 5) {
      setValid(false);
      setbtn(false);
    } else {
      setValid(true);
      setbtn(true);
    }
  };

  return (
    <ScrollView style={joincss.body}>
      <View style={joincss.main}>
        <Text style={joincss.title}>Create a password</Text>
        <Text style={joincss.des}>
          For security, your password must be 6 characters or more.
        </Text>
        <View>
          <TextInput
            style={joincss.input}
            placeholder="Password"
            selectionColor={'#fff'}
            secureTextEntry={true}
            onKeyPress={validate}
            onChangeText={val => {
              setPass(val);
            }}
          />

          <Text style={joincss.err}></Text>
        </View>
        <TouchableOpacity
          style={btn ? joincss.dbtn : joincss.btn}
          disabled={btn}
          underlayColor="transparent"
          onPress={() =>
            navigation.navigate('email', {
              uname: route.params.uname,
              pass: pass,
            })
          }>
          <Text style={{fontSize: 18}}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Password;
