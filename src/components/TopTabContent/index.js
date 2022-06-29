import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import constants from '../../constants/constants';

const index = ({selectedIndex}) => {
  return (
    <View>
      <FlatList
        data={
          selectedIndex == 0
            ? constants.HeaderContent[0].VideoLessons
            : selectedIndex == 1
            ? constants.HeaderContent[1].VideoLessons
            : constants.HeaderContent[2].VideoLessons
        }
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View>
            <View style={style.contntView}>
              <View style={{flexDirection: 'row'}}>
                {item.play}
                <Text numberOfLines={2} style={style.contntText(item)}>{item.txt}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 15}}>
                {item.lock}
                <Text style={{marginLeft: 5}}>30:35</Text>
              </View>
            </View>
            <View style={style.line} />
          </View>
        )}
      />
    </View>
  );
};

export default index;

const style = StyleSheet.create({
  contntView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  contntText: item => ({
    fontFamily: 'Inter-Medium',
    width: 270,
    color: item.colr,
    fontSize: 13,
    paddingLeft: 30,
  }),
  line: {
    width: 361,
    backgroundColor: '#F1F1F1',
    height: 1.5,
    marginHorizontal: 20,
  },
});
