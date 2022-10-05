import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Search from './pages/Search';
import Icon from 'react-native-vector-icons/Feather';
import img from '../assets/insta.png';
const Tab = createBottomTabNavigator();
const scropt = {
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#000',
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: '#3972bf',
  tabBarInactiveTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#000',
  },
  headerLeftLabelVisible: true,
  headerShadowVisible: false,
};
const Activity = () => {
  return (
    <Tab.Navigator screenOptions={scropt}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => {
            return (
              <Image source={img} style={{width: 110}} resizeMode="contain" />
            );
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                color="#fff"
                name="search"
                size={22}
                style={{marginRight: 25}}
              />
              <Icon
                color="#fff"
                name="message-square"
                size={22}
                style={{marginRight: 15}}
              />
            </View>
          ),
          tabBarIcon: tab => {
            return <Icon name="home" color={tab.color} size={tab.size - 3} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Search}
        options={{
          tabBarIcon: tab => {
            return <Icon name="search" color={tab.color} size={tab.size - 3} />;
          },
        }}
      />

      <Tab.Screen
        name="AddPost"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: tab => {
            return <Icon name="plus" color={tab.color} size={tab.size - 3} />;
          },
        }}
      />
      <Tab.Screen
        name="natify"
        component={Search}
        options={{
          tabBarIcon: tab => {
            return (
              <Icon name="activity" color={tab.color} size={tab.size - 3} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Search}
        options={{
          tabBarIcon: tab => {
            return <Icon name="user" color={tab.color} size={tab.size - 3} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Activity;

const styles = StyleSheet.create({});
