import React, {Component} from 'react';
import {Text, View, FlatList, Dimensions, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style';
import constants from '../../constants/constants';



const index = () => {

  const naviation = useNavigation()
  const renderitem = ({item, }) => {
    return (
      <Pressable onPress={() => naviation.navigate('Search', {sub: item.title})}>
        <View style={style.intrestPart(item)}>
          <Text style={style.interstText(item)}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    
    <FlatList
      style={{paddingHorizontal: 13, marginTop: 10,  }}
      numColumns={2}
      renderItem={renderitem}
      data={constants.TypeSubject}
    />
  );
};

export default index;
