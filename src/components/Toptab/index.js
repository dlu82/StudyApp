import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import constants from '../../constants/constants';
import Tabcontent from '../TopTabContent';

import style from './style';
const index = ({selected, diTap}) => {
  return (
    <View style={style.Horizontal}>
      {constants.HeaderContent &&
        constants.HeaderContent.map((item, index) => {
          return (
            <Pressable onPress={() => diTap(index)}>
              <View style={{alignItems: 'center'}}>
                <Text style={style.HeaderTxT}>{item.name} </Text>
                {selected == index ? (
                  <View
                    style={{
                      width: 113.5,
                      backgroundColor: '#3E6FEE',
                      height: 3,
                      marginTop: 10,
                    }}
                  />
                ) : (
                  <View style={{  width: 113.5,
                    backgroundColor: 'transparent',
                    height:3,
                    marginTop: 10,}} />
                )}
              </View>
            </Pressable>
          );
        })}
    </View>
  );
};

export default index;
