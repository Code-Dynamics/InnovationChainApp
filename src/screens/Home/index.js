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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <View style={styles.profilediv}>
          <View style={styles.profileInnerdiv}>
            <View style={styles.proimg}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={images.profile}
              />
            </View>
            <View style={styles.profilenamediv}>
              <Text style={styles.profilewellcome}>Welcome back</Text>
              <Text style={styles.profilename}>Sophia Calzoni</Text>
            </View>
          </View>
          <View style={styles.icondiv}>
            <Ionicons
              name="md-notifications"
              size={28}
              style={styles.notifyicon}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>ok</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
