import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window').width

const styles = StyleSheet.create({
  mainView: {
    height: 110,
    width: window/1.07,
    elevation: 2,
    borderRadius: 6,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 245,
    marginLeft: 13,
  },
  HorizontalStyle: {
    height: 80,
    width: 2,
    backgroundColor: '#EFEFEF',
    // marginVertical: ,
    marginLeft: 11.5,
  },
  svg:{
    alignItems: 'center',
    // paddingHorizontal:s5,
  },
  Samestyle:{
    flexDirection: 'row',
    marginTop:13,


  },
  horizontalmenuText:{
    fontFamily: 'Inter-SemiBold',
      color: 'black',
      fontSize: 15,
      marginTop: 5
  }
});
export default styles;
