import {useNavigation} from '@react-navigation/native';
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

const Videoplyer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}>
        <Header titil={'Video screen'} />
        <View style={styles.textcontainer}>
          <Text style={styles.textinner}>Video</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Videoplyer;
