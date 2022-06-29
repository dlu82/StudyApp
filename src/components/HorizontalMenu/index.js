import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import icons from '../../constants/icons';

import style from './style';

const index = ({dataArray}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      {dataArray &&
        dataArray.map((item, index) => {
          return (
            <View style={styles.Samestyle}>
              <View style={styles.svg}>
                {item.image}
                <Text style={styles.horizontalmenuText}>{item.text}</Text>
              </View>
              {index !== 3 && <View style={style.HorizontalStyle} />}
            </View>
          );
        })}
    </View>
  );
};

export default index;
