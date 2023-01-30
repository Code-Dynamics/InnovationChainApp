import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../components/Button';
import {colors, sizes} from '../../services';
import images from '../../services/utilites/images';
import {styles} from './style';

export default function PhoneNumber() {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const phoneInput = useRef(null);
  const handleContinue = () => {
    navigation.navigate('drawer');
  };
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={images.background} style={styles.bg}>
          <View style={styles.paddingHeading}>
            <Text style={styles.heading}>My mobile</Text>
            <Text style={styles.text}>
              Please enter a valid phone number. We will send you a 4-digit code
              to verify your account.
            </Text>
          </View>
          <View style={styles.inputView}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="PK"
              layout="first"
              onChangeText={text => {
                setValue(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
              }}
              containerStyle={styles.inputContainer}
              textContainerStyle={styles.textContainer}
              textInputStyle={styles.inputStyle}
              codeTextStyle={styles.codeText}
              flagButtonStyle={styles.flagBg}
              //   withDarkTheme
              // withShadow
              autoFocus
            />
          </View>
          <View style={styles.buttonTop}>
            <Button title={'Continue'} light={false} onPress={handleContinue} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
