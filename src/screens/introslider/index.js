import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SlideOne, SlideTow, SlideThree} from '../../components';
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';

const slides = [
  {id: 1, name: <SlideOne />},
  {id: 2, name: <SlideTow />},
  {id: 3, name: <SlideThree />},
];

const IntroSliderScreen = () => {
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      // if (slide != imgActive) {
      //   setImgActive(slide);
      // }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}>
        {slides.map((item, index) => {
          return <View styles={styles.widthslid}>{item.name}</View>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntroSliderScreen;
