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
import {
  SlideOne,
  SlideTow,
  SlideThree,
  Header,
  CustomTextFiel,
} from '../../components';
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';

const CreatAcouunt = () => {
  const navigation = useNavigation();
  const createAccout = () => {
    navigation.navigate('drawer');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <View style={styles.center}>
          <View style={styles.creactaccountlogo}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={images.icon}
            />
          </View>
        </View>
        <View>
          <CustomTextFiel label="First name" />
          <CustomTextFiel label="Last name" />
          <CustomTextFiel label="Email" />
          <CustomTextFiel label="Password" />
        </View>
        <View style={styles.buttondiv}>
          <Button title="Create account" onPress={createAccout} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreatAcouunt;
