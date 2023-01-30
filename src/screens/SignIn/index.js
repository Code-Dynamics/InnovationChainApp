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
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';

export default function SignIn() {
  const navigation = useNavigation();
  const createAccount = () => {
    navigation.navigate('createaccount');
  };
  const usePhoneNum = () => {
    navigation.navigate('PhoneNumber');
  };
  const signUp = () => {
    navigation.navigate('drawer');
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={images.background} style={styles.bg}>
          <View style={styles.icon}>
            <Image
              source={images.icon}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading}>Welcome back</Text>
            <Text style={[styles.subHeading, styles.paddingTop2]}>
              Sign in to continue
            </Text>
          </View>
          <View style={[styles.flex2, styles.paddingTop2]}>
            <View style={styles.marginRight}>
              <TouchableOpacity>
                <Image source={images.fb} />
              </TouchableOpacity>
            </View>
            <View style={styles.marginRight}>
              <TouchableOpacity>
                <Image source={images.google} />
              </TouchableOpacity>
            </View>

            <View style={styles.marginRight}>
              <TouchableOpacity>
                <Image source={images.apple} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex, styles.paddingTop2]}>
            <Image source={images.line} style={styles.line} />
            <View style={styles.width}>
              <Text style={styles.text}>Or Sign Up With</Text>
            </View>
            <Image source={images.line} style={styles.line} />
          </View>

          <View style={styles.paddingTop2}>
            <Button
              title={'Create an account'}
              light={true}
              onPress={createAccount}
            />
          </View>
          <View style={styles.paddingTop3}>
            <Button
              title={'Use phone number'}
              light={true}
              onPress={usePhoneNum}
            />
          </View>
          <View style={styles.paddingTop3}>
            <Button title={'Sign Up'} light={false} onPress={signUp} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
