import {StyleSheet, Dimensions, Appearance} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
  },
  logo: {
    width: windowHeight - 700,
    marginTop: -50,
  },
  title: {
    marginBottom: 50,
  },
  logout: {
    marginTop: 90,
    color: '#1b7cf2',
    padding: 20,
    fontWeight: 'bold',
  },
});

export default styles;
