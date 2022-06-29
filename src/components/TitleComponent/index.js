import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { useNavigation, CommonActions} from '@react-navigation/native';
import styles from './style';


const index = ({SeeallTxt, spclStyle, needSeeAll}) => {

  const navigation = useNavigation();
  return (
    <View style={{...styles.container,...spclStyle}}>
      <Text style={styles.Category}>{SeeallTxt}</Text>
      <Pressable onPress={ () => navigation.navigate('Search', {sub:SeeallTxt, })}>
        {needSeeAll && (<Text style={styles.SeeAll}>See all</Text>)}
      </Pressable>
    </View>
  );
};
export default index;