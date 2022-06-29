import React from 'react'
import { View, Text, Image} from 'react-native'

import style from './style'
import image from '../../constants/images'

const index = () => {
  return (
    <View style={{alignItems: 'center',}}>
      <Image style={{height: 200, width: '95%', resizeMode: 'contain'}} source={image.Ad}/>
    </View>
  )
}

export default index