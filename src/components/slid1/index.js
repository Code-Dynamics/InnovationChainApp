import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilites/images';
import Button from '../Button';

import {styles} from './style';
const SlideOne = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <View style={styles.center}>
          <View style={styles.slidermainimage}>
            <Image
              source={images.intrisliderfirstimage}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
        <View style={styles.headingcotainer}>
          <Text style={styles.hed}>Grow your business your way</Text>
        </View>
        <View style={styles.payracontainer}>
          <Text style={styles.payratext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
        <View style={styles.butoncontainer}>
          <Button
            title={'join now'}
            onPress={() => {
              navigation.navigate('drawer');
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SlideOne;
