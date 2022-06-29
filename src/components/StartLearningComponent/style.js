import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Button: {
    width: 150,
    height: 40,
    backgroundColor: '#3E6FEE',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 18,
  },
  ButtnText: {
    fontFamily: 'Roboto-Medium',
    color: 'white',
    fontSize: 18,
    lineHeight: 20,
  },
});
export default style;
