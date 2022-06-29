import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  StatusBar,
  Pressable,
} from 'react-native';

import styles from './style';
import image from '../../constants/images';
import HorizontalMenu from '../../components/HorizontalMenu';
import TitleComponent from '../../components/TitleComponent';
import ListComponent from '../../components/ListComponent';
import constants from '../../constants/constants';
import IntrestedComponent from '../../components/IntrestedComponent';
import AdBanner from '../../components/adBanner';

const index = () => {
  const renderItem = ({item}) => {
    return (
      <ListComponent courseName={item.title} backgrnd={item.image} lessons={item.lessons} tagArray={item.tag} text={item.test} test={item.test}
      />
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0E3896'} />
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={image.mainBackgrnd}
          style={{height: 302, backgroundColor: '#0E3896'}}
        />
        <HorizontalMenu dataArray={constants.Horizontal} />
        <TitleComponent
          SeeallTxt={'Top Courses'}
          spclStyle={{marginTop: 70}}
          needSeeAll
        />
        <FlatList
          horizontal
          contentContainerStyle={{paddingRight: 13}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={constants.TopCourse}
        />
        <TitleComponent
          needSeeAll
          SeeallTxt={'Academic Courses'}
          spclStyle={{marginTop: 10}}
        />
        <FlatList
          horizontal
          contentContainerStyle={{paddingRight: 13}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={constants.TopCourse}
        />
        <TitleComponent
          SeeallTxt={'What are you intrested in?'}
          spclStyle={{marginTop: 20}}
        />
        <IntrestedComponent />

        <TitleComponent
          needSeeAll
          SeeallTxt={'General Courses'}
          spclStyle={{marginTop: 20}}
        />

        <FlatList
          horizontal
          contentContainerStyle={{paddingRight: 13}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={constants.TopCourse}
        />
        <AdBanner />

        <TitleComponent needSeeAll SeeallTxt={'Best Combo Courses'} />
        <FlatList
          horizontal
          contentContainerStyle={{paddingRight: 13, paddingBottom: 30}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={constants.TopCourse}
        />
      </ScrollView>
    </View>
  );
};

export default index;
