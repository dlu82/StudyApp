import {StyleSheet, Dimensions} from 'react-native';
const Screenwidth = Dimensions.get("window").width

const style = StyleSheet.create({
  List: {
    height: 239,
    width: Screenwidth/1.67,
    backgroundColor: 'white',
    marginLeft: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'#E6E6E6',
    marginTop: 10,
  },
  backImg:{
    width: Screenwidth/1.67,
    height: 115,
  },
  subject: item => ({
    height: 20,
    width: 60,
    borderRadius: 3,
    backgroundColor: item.backgrndColor,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
   
  }),
  subjectText: item => ({
    color: item.textcolr,
    fontSize: 12,
    fontWeight: '600'
  }),
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  HorizontalStyle: {
    height: 1,
    width: '100%',
    backgroundColor: '#F4F4F4',
    marginTop: 12,
    // marginLeft: 11.5,
  },
  descStyle: {
    marginTop: 15,
    // marginLeft: 10
  },
  blueDot:{
    backgroundColor: '#1D53CD',
    height: 4,
    width: 4,
    borderRadius: 2,
    marginTop: 4,
    marginRight: 5,
    marginLeft: 5

  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default style;
