import {StackActions} from '@react-navigation/native';
import {navRef} from './App';

export const navPush = name => {
  if (navRef.isReady) {
    navRef.navigate(name);
  }
};
