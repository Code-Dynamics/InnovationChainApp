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
const SlideThree = () => {
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
          <Text>
            <Octicons name="dot-fill" size={30} style={styles.activedot} />
          </Text>
          <Text>
            <Octicons name="dot-fill" size={30} style={styles.nonactivedot} />
          </Text>
        </View>
        <View style={styles.butoncontainer}>
          <Button title={'Create an account'} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footertext}>
            Already have an account?{' '}
            <Text style={styles.footertextsigin}>Sign In</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SlideThree;
