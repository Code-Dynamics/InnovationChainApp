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

const SuppportChat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SuppportChat</Text>
    </SafeAreaView>
  );
};

export default SuppportChat;
