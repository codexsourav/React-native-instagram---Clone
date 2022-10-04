import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import joincss from './style/joincss';

const Username = ({navigation}) => {
  const [valid, setValid] = useState(true);
  const [btn, setbtn] = useState(true);
  const [load, setload] = useState(false);
  const [uname, setUname] = useState('');
  const [err, setErr] = useState('');
  const validate = () => {
    if (uname.length >= 2) {
      setValid(false);
      setbtn(false);
    } else {
      setValid(true);
      setbtn(true);
    }
  };

  const chackuname = async () => {
    setErr('');
    setload(true);
    setbtn(true);
    const data = await firestore()
      .collection('users')
      .where('uname', '==', uname)
      .get();

    if (data._docs.length >= 1) {
      console.log('user alrady exist');
      setErr('Username Alrady Exist!');
      setload(false);
      setbtn(false);
    } else {
      setload(false);
      setbtn(false);
      navigation.navigate('password', {
        uname,
      });
    }
  };

  return (
    <ScrollView style={joincss.body}>
      <View style={joincss.main}>
        <Text style={joincss.title}>Choose username</Text>
        <Text style={joincss.des}>You can always change it later.</Text>
        <View>
          <TextInput
            style={joincss.input}
            placeholder="@ Username"
            selectionColor={'#fff'}
            onKeyPress={validate}
            onChangeText={val => {
              setUname(val.toLowerCase());
            }}
          />
          <Text style={joincss.err}>{err}</Text>
        </View>

        <TouchableOpacity
          style={btn ? joincss.dbtn : joincss.btn}
          disabled={btn}
          underlayColor="transparent"
          onPress={() => chackuname()}>
          {load ? (
            <ActivityIndicator />
          ) : (
            <Text style={{fontSize: 18}}>NEXT</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Username;
