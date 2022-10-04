import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const joincss = StyleSheet.create({
  body: {
    backgroundColor: '#000',
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    marginTop: 40,
  },
  des: {
    fontSize: 14,
    fontWeight: '200',
    marginTop: 15,
    marginBottom: 30,
  },
  input: {
    width: windowWidth - 80,
    backgroundColor: '#181818',
    paddingHorizontal: 15,
    shadowColor: '#fff',

    borderRadius: 5,
  },
  err: {
    color: 'red',
    marginTop: 4,
    marginBottom: 30,
    opacity: 0.6,
    fontSize: 10,
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
});

export default joincss;
