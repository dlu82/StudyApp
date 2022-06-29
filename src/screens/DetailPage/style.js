import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  upperPart: {
    backgroundColor: '#A557C580',
    width: '100%',
    height: 261.19,
    overflow: 'hidden',
  },
  semiCircle: {
    width: 260,
    height: 260,
    backgroundColor: '#A557C5',
    borderRadius: 130,
    alignSelf: 'center',
  },
  Level: {
    height: 24,
    width: 65,
    backgroundColor: '#157EEE',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 9,
  },
  TextIntermediate: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 26,
    marginLeft: 12,
    color: 'black',
    lineHeight: 31,
  },
  RatingPart: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 17.5,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: 'Inter-Regular',
    color: 'black',
    fontSize: 14,
    lineHeight: 18,
  },
  line: {
    width: window / 1.08,
    height: 1,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 12,
    marginTop: 21,
  },
  LearnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: 'black',
    marginLeft: 12,
    marginTop: 16,
    lineHeight: 26,
  },
  
});
export default styles;
