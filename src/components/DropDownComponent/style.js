import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  DropDown: item => ({
    // height: 350,
    // width: 348,
    backgroundColor: item.bgColr,
    marginTop: 19,
    borderRadius: 10,
    marginHorizontal: 12,
    paddingBottom: 15,
  }),
  subText: item => ({
    fontFamily: 'Inter-SemiBold',
    color: item.tXt,
    fontSize: 17,
  }),
  List: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  content: item => ({
    borderRadius: 10,
    // backgroundColor: item.bgColr,
    marginLeft: 12,
  }),
  TxT: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;
