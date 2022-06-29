import React from 'react';
import image from './images';
import icons from './icons';

import Listening from '../assets/Icons/Listening.svg';
import Reading from '../assets/Icons/Reading.svg';
import Speaking from '../assets/Icons/Speaking.svg';
import Writing from '../assets/Icons/Writing.svg';
import Tv from '../assets/Icons/Tv.svg';
import Doc from '../assets/Icons/Doc.svg';
import Lap from '../assets/Icons/Lap.svg';
import Tv1 from '../assets/Icons/Tv1.svg';
import Play from '../assets/Icons/Play.svg';
import Lock from '../assets/Icons/lock.svg'

const constants = {
  TopCourse: [
    {
      id: 1,
      tag: [
        {title: 'Listening', backgrndColor: '#08A073', textcolr: 'white'},
        {title: 'Reading', backgrndColor: '#A557C5', textcolr: 'white'},
      ],
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image.courseBackgrnd,
      lessons: '12 Lessons',
      test: 'Mock Test',
    },
    {
      id: 2,
      tag: [{title: 'Writing', backgrndColor: '#157EEE', textcolr: 'white'}],
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image.courseBackgrnd,
      lessons: '12 Lessons',
    },
    {
      id: 3,
      tag: [
        {title: 'Writing', backgrndColor: '#157EEE', textcolr: 'white'},
        {title: 'Speaking', backgrndColor: '#E5C32F', textcolr: 'white'},
      ],
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image.courseBackgrnd,
      lessons: '12 Lessons',
    },
    {
      id: 4,
      tag: [{title: 'Speaking', backgrndColor: '#E5C32F', textcolr: 'white'}],
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image.courseBackgrnd,
      lessons: '12 Lessons',
      test: 'Mock Test',
    },
  ],
  TypeSubject: [
    {
      id: 1,
      title: 'Reading',
      backgrndColor: '#A557C51A',
      textColor: '#A557C5',
      borderColr: '#A557C533',
    },
    {
      id: 2,
      title: 'Writing',
      backgrndColor: '#2C64E31A',
      textColor: '#3E6FEE',
      borderColr: '#157EEE33',
    },
    {
      id: 3,
      title: 'listening',
      backgrndColor: '#13A4791A',
      textColor: '#13A479',
      borderColr: '#08A07333',
    },
    {
      id: 4,
      title: 'Speaking',
      backgrndColor: '#FFC2541A',
      textColor: '#F39B15',
      borderColr: '#FBBC0533',
    },
  ],
  Horizontal: [
    {
      id: 1,
      image: <Listening />,
      text: 'Listening',
    },
    {
      id: 2,
      image: <Reading />,
      text: 'Reading',
    },
    {
      id: 3,
      image: <Speaking />,
      text: 'Speaking',
    },
    {
      id: 4,
      image: <Writing />,
      text: 'Writing',
    },
  ],
  LessonData: [
    {
      id: 1,
      title: 'Reading includes',
      Content: [
        {
          id: 1,
          img: <Tv />,
          lessons: '44 video Lessons',
          parts: 'The course is divided into 12 parts',
        },
        {
          id: 2,
          img: <Doc />,
          lessons: 'Includes 35 Practice materials',
          parts: 'This course is sutable for beginners',
        },
        {
          id: 3,
          img: <Lap />,
          lessons: '25 mocktest',
          parts: 'Episode have an average legth of 12 min',
        },
      ],
      bgColr: '#1999501F',
      tXt: '#038936',
    },
    {
      id: 2,
      title: 'Listening includes',
      Content: [
        {
          id: 1,
          img: <Tv />,
          lessons: '44 video Lessons',
          parts: 'The course is divided into 12 parts',
        },
        {
          id: 2,
          img: <Doc />,
          lessons: 'Includes 35 Practice materials',
          parts: 'This course is sutable for beginners',
        },
        {
          id: 3,
          img: <Lap />,
          lessons: '25 mocktest',
          parts: 'Episode have an average legth of 12 min',
        },
      ],
      bgColr: '#FBBC0533',
      tXt: '#F39B15',
    },
    {
      id: 3,
      title: 'Writing includes',
      Content: [
        {
          id: 1,
          img: <Tv />,
          lessons: '44 video Lessons',
          parts: 'The course is divided into 12 parts',
        },
        {
          id: 2,
          img: <Doc />,
          lessons: 'Includes 35 Practice materials',
          parts: 'This course is sutable for beginners',
        },
        {
          id: 3,
          img: <Lap />,
          lessons: '25 mocktest',
          parts: 'Episode have an average legth of 12 min',
        },
      ],
      bgColr: '#CBA6DF42',
      tXt: '#A557C5',
    },
  ],
  HeaderContent: [
    {
      id: 1,
      name: 'Video Lessons',
      VideoLessons: [
        {
          id: 1,
          play: <Play />,
          txt: 'Overview of the IELTS Listing Test',
          colr: 'black'
        },
        {
          id: 2,
          play: <Tv1 />,
          txt: 'label Map Or Diagram Questions',
          lock: <Lock/>
        },
        {
          id: 3,
          play: <Tv1 />,
          txt: 'Overview of the IELTS Listing Test',
          lock: <Lock/>
        },
        {
          id: 4,
          play: <Tv1 />,
          txt: 'label Map Or Diagram Questions',
          lock: <Lock/>,
        },
        {
          id: 5,
          play: <Tv1 />,
          txt: 'Overview of the IELTS Listing Test',
          lock: <Lock/>,
        },
      ],
    },
    {
      id: 2,
      name: 'Practice Material',
      VideoLessons: [
        {
          id: 1,
          play: <Play />,
          txt: 'Overview of the IELTS Practice Materials',
          colr: 'black'
        },
        {
          id: 2,
          play: <Tv1 />,
          txt: 'label Diagram Questions',
          lock: <Lock/>,
        },
        {
          id: 3,
          play: <Tv1 />,
          txt: 'Overview of the IELTS Practice Materials',
          lock: <Lock/>,
        },
        {
          id: 4,
          play: <Tv1 />,
          txt: 'label Diagram Questions',
          lock: <Lock/>,
        },
        {
          id: 5,
          play: <Tv1 />,
          txt: 'Overview of the IELTS Practice Materials',
          lock: <Lock/>,
        },
      ],
    },
    {
      id: 3,
      name: 'Mocktest',
      VideoLessons: [
        {
          id: 1,
          play: <Play />,
          txt: 'Overview of the IELTS MockTest',
          colr: 'black'
        },
        {
          id: 2,
          play: <Tv1 />,
          txt: 'label Map Questions',
          lock: <Lock/>,
        },
        {
          id: 3,
          play: <Tv1 />,
          txt: 'Overview of the IELTS MockTest',
          lock: <Lock/>,
        },
        {
          id: 4,
          play: <Tv1 />,
          txt: 'label Map Questions',
          lock: <Lock/>,
        },
        {
          id: 5,
          play: <Tv1 />,
          txt: 'Overview of the IELTS MockTest',
          lock: <Lock/>,
        },
      ],
    },
  ],
};
export default constants;
