import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'
import { useNavigation ,CommonActions} from '@react-navigation/native'

import style from './style'

const index = () => {
    const navigation = useNavigation()

    const onStartLearning=()=>{
       
            navigation.dispatch(
              CommonActions.reset({
                routes: [
                  {
                    name: "HomeScreen",
                    state: {
                      routes: [
                        {
                          name: "Learning",
                          params:{path:"detailScreen"}
                          
                        },
                      ],
                    },
                  },
                ],
              }),
            );
        
    }

    return(
    <View>
        <View style={{width:'100%', height: 2, backgroundColor: '#F1F1F1'}}/>
    <View style={style.container}>
        <View>
            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Inter-SemiBold'}}>Free</Text>
            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Inter-SemiBold'}}>120 People have attended</Text>
        </View>
        <View>
            <Pressable style={style.Button} onPress={onStartLearning}>
            <Text style={style.ButtnText}>Start learning</Text>
            </Pressable>
        </View>
    </View>
    </View>
)
}

export default index

const styles = StyleSheet.create({})