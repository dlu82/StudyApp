import React, {useState} from 'react';

import {View, Text, Pressable} from 'react-native';
import style from './style';
import Down from '../../assets/Icons/Down.svg';
import Up from '../../assets/Icons/Up.svg';
import constants from '../../constants/constants';

const index = ({subText, styleProp, arData, isExpanded, item}) => {
  const [expand, setExpand] = useState(false);

  const toggleFunction = () => {
    console.log('toggle ======== ');
    setExpand(!expand);
  };

  return (
    <View style={style.container}>
      <View style={{...style.DropDown(item), ...styleProp}}>
        <Pressable style={style.List} onPress={toggleFunction}>
          <Text style={style.subText(item)}>
            {subText}
          </Text>
          {!expand ? <Down /> : <Up />}
        </Pressable>

        {expand && (
          <View>
            {arData &&
              arData.map((item, index) => {
                return (
                  <View style={style.content( )}>
                    <View style={{flexDirection: 'column',}}>
                      <View style={{flexDirection: 'row', marginVertical: 20,}}>
                        {item.img}
                        <View style={{marginLeft: 10}}>
                          <Text style={style.TxT}>{item.lessons}</Text>
                          <Text style={[style.TxT,{color: '#717171',fontSize: 14, fontWeight: '400'}]}>{item.parts}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        )}
      </View>
    </View>
  );
};

export default index;
