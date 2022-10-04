import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';

const HomePage = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#000', padding: 80}}>
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
      <Button
        onPress={() => navigation.replace('Verify')}
        title="Verify Page"
      />
    </ScrollView>
  );
};

export default HomePage;
