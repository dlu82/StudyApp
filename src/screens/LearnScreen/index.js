import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Header from '../../components/HeaderComponent'

const index = ({route}) => {
  const navigation = useNavigation()

  console.log("LEARNING SCREEN=====",route)


  const onBackPress=()=>{
    if(route?.params?.path === "detailScreen"){
      navigation.navigate("DetailPage")
    }else{

      navigation.goBack()
    }
  }

  return (
    <View style={{flex: 1}}>
      <Header  TapOn={() => onBackPress()} />
      <View style={styles.container}>
        <Text>This is Learn Page</Text>
      </View>
    </View>
  )
}

export default index