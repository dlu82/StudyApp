import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import constants from '../../constants/constants'
import Title from '../../components/TitleComponent'
import ListComponent from '../../components/ListComponent';
import TopTab from '../../components/Toptab'
import Tabcontent from '../../components/TopTabContent'
import FooterComponent from '../../components/StartLearningComponent'

import Header from '../../components/HeaderComponent';
import DrpDown from '../../components/DropDownComponent'
import image from '../../constants/images';
import Beginner from '../../assets/Icons/BeginnerBanner.svg';
import Star from '../../assets/Icons/Star.svg';




const index = ({ }) => {
  const renderItem = ({item,}) => {
    return <ListComponent courseName={item.title} backgrnd={item.image} lessons={item.lessons} tagArray={item.tag} text={item.test} test= {item. test} ListStyle={{marginLeft: 20}}/>;
  };

  const [selected,setSelected]=useState(0)
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={'#A557C579'} />
        <View style={style.upperPart}>
          <Header TapOn={() => navigation.navigate('Home')} />
          <View style={style.semiCircle}>
            <Image
              source={image.image}
              style={{ marginTop: -20, height: 240, width: 290 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 12 }}>
          <Beginner />
          <View style={style.Level}>
            <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Inter-SemiBold', lineHeight: 18}}>
              Writing
            </Text>
          </View>
        </View>
        <Image
          source={image.FreeCourse}
          style={{ marginTop: 25, marginLeft: 12 }}
        />
        <Text style={style.TextIntermediate}>
          Intermediate {'\n'}
          Conversation Topics
        </Text>
        <View style={style.RatingPart}>
          <Star style={{ marginRight: 3 }} />
          <Text style={style.RatingText}>4.92 (65)</Text>
          <Text style={style.RatingText}>
            Rated 4.92 out of 5 from 65 reviews.
          </Text>
        </View>
        <View style={style.line} />
        <View>
          <Text
            style={style.LearnText}>
            What you'll Learn
          </Text>
          <Text style={[style.LearnText, { fontSize: 14, fontFamily:"Inter-Regular", lineHeight:24, marginTop: 16, }]}>
            In this course, you'll practice discussing topics such as money,
            exercise and diet, and social media. At the same time, you'll learn
            vocabulary at the B1-B2 level. Continue to develop your
            conversational English with more intermediate conversation topics!
            
          </Text>
        </View>

        <FlatList
          data={constants.LessonData}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => <DrpDown subText={item?.title} arData={item.Content} item={item} />}
        />
        <Title SeeallTxt={'Course Content'} spclStyle={{ marginVertical: 19 }}/>
        
        <TopTab selected={selected} diTap={(index)=>{setSelected(index)}}/>
        <Tabcontent selectedIndex= {selected}/>
        <Title SeeallTxt={'Similiar Courses'} spclStyle={{marginTop: 24, marginHorizontal: 12}} />
        <FlatList
          horizontal
          contentContainerStyle={{paddingRight: 20, paddingBottom: 20}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={constants.TopCourse}
        />
        
      </ScrollView>
      <FooterComponent />
    </View>
  );
};

export default index;
