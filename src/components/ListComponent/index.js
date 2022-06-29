import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const index = ({courseName, backgrnd, lessons, text, tagArray, test, ListStyle}) => {
  const navigation = useNavigation();
  return (
    <View style={{...style.List,...ListStyle}}>
      <Pressable
        style={style.Press}
        onPress={() => {
          navigation.navigate('DetailPage');
        }}>
        <Image
        style={style.backImg}
          source={backgrnd}
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
        />
        <View style={{flexDirection: 'row', marginLeft: 11}}>
          {tagArray &&
            tagArray.map(item => {
              return (
                <View style={style.subject(item)}>
                  <Text style={style.subjectText(item)}>{item.title}</Text>
                </View>
              );
            })}
        </View>
        <View style={style.descStyle}>
          <Text style={style.name} numberOfLines={2}>
            {courseName}
          </Text>
            <View style={style.HorizontalStyle} />
            <View style={{flexDirection: 'row', marginTop: 6, marginLeft: 10, alignItems: 'center',}}>
              <Text style={{color: 'black'}}>{lessons}</Text>
              {test && <View style={style.blueDot}/>}
              <Text style={{color: 'black'}}>{text}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default index;
