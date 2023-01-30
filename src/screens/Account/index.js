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
import {SlideOne, SlideTow, SlideThree, Header} from '../../components';
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';

const ACCOUNT = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}>
        <Header titil={'payments'} />
        <View style={styles.textcontainer}>
          <Text style={styles.textinner}>
            People like hearing your story, your values and your motivations.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ACCOUNT;
