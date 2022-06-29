import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import BackButtn from '../../assets/Icons/Back.svg';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const index = ({isBack, isHeart, TapOn}) => {
  const navigation = useNavigation();

  const didTapOnBack = () => {
    console.log('dilsghad===');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {isBack ? (
          <View />
        ) : (
          <Pressable
            onPress={TapOn?TapOn:didTapOnBack} >
            <BackButtn />
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default index;
