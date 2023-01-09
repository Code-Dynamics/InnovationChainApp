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

export default function Welcome() {
  const createAccount = () => {
    console.log('create acc');
  };
  const usePhoneNum = () => {
    console.log('use phone');
  };
  const skipLogin = () => {
    console.log('skip login');
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
            <Text style={styles.heading}>Welcome!!</Text>
          </View>
          <View style={[styles.flex, styles.paddingTop2]}>
            <Image source={images.line} style={styles.line} />
            <View style={styles.width}>
              <Text style={styles.text}>Or Sign Up With</Text>
            </View>
            <Image source={images.line} style={styles.line} />
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
          <View style={styles.paddingTop}>
            <Button
              title={'Create an account'}
              light={false}
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
            <Button title={'Skip login'} light={true} onPress={skipLogin} />
          </View>
          <View style={[styles.flex2, styles.footerTop]}>
            <TouchableOpacity>
              <Text style={styles.text}>Terms of use {'   '}</Text>
            </TouchableOpacity>
            <Image source={images.straightLine} />
            <TouchableOpacity>
              <Text style={styles.text}>{'   '} Privacy Policy </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
