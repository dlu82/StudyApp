import React from 'react'
import { View, Text, ImageBackground} from 'react-native'
import image from '../../constants/images'
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Header from '../../components/HeaderComponent'

const index = ({route}) => {
  const navigation = useNavigation()
  const page = route?.params?.sub ? route?.params?.sub : 'Search';
  console.log('Data@##',route.params)

const onBackPress=()=>{
  navigation.goBack()
}

  return (
    <View style={{flex: 1}}>
      <Header   TapOn={() => onBackPress()}/>
    <View style={styles.container} >
      <Text>This is {page} Search Page</Text>
    </View>
    </View>
  )
}

export default index