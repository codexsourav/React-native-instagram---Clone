import {StyleSheet, Dimensions, Appearance} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const colorScheme = Appearance.getColorScheme();

let bg = '#fff';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
  },
  authbox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight,
  },
  loginbox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: windowWidth - 200,
    resizeMode: 'contain',
    marginTop: 40,
    height: 100,

    marginBottom: 30,
  },
  input: {
    width: windowWidth - 80,
    backgroundColor: '#181818',
    paddingHorizontal: 15,
    shadowColor: '#fff',
    marginBottom: 30,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#3972bf',
    width: windowWidth - 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dbtn: {
    backgroundColor: '#4e80b6',
    width: windowWidth - 80,
    height: 50,
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  fpass: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
  },
  fptxt: {
    fontSize: 12,
  },
  gofpass: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#fff',
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
    width: windowWidth,
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderColor: '#626262',
  },

  gosignup: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default styles;
