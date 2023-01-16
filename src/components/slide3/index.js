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
import Octicons from 'react-native-vector-icons/Octicons';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {sizes} from '../../services';
const SlideThree = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <View style={styles.center}>
          <View style={styles.slidermainimage}>
            <Image
              source={images.introsliderthreeimage}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
        <View style={styles.headingcotainer}>
          <Text style={styles.hed}>swipe</Text>
        </View>
        <View style={styles.payracontainer}>
          <Text style={styles.payratext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={styles.dotcontainer}>
          <Text style={{marginHorizontal: sizes.TinyMargin}}>
            <Octicons name="dot-fill" size={30} style={styles.nonactivedot} />
          </Text>
          <Text>
            <Octicons name="dot-fill" size={30} style={styles.activedot} />
          </Text>
        </View>
        <View style={styles.butoncontainer}>
          <Button
            title={'Create an account'}
            onPress={() => {
              navigation.navigate('Creataccount');
            }}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text
            style={styles.footertext}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            Already have an account?{' '}
            <Text style={styles.footertextsigin}>Sign In</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SlideThree;
