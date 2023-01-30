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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({dark, titil}) {
  return (
    <TouchableOpacity style={styles.iconTop}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color={dark ? colors.primary : colors.white}
        size={25}
      />
      <Text style={styles.hedtex}>{titil}</Text>
    </TouchableOpacity>
  );
}
