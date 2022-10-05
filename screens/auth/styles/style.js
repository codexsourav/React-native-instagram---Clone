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
  model: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  alert: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertmsg: {
    color: '#000',
    fontWeight: '500',
    opacity: 0.9,
  },
  alertbtn: {
    backgroundColor: 'rgba(61, 61, 254, 1)',
    paddingHorizontal: 29,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 25,
  },
});
export default styles;
