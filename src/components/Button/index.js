import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

export default function Button({title, light,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={light ? styles.lightButton : styles.button}>
        <Text style={light ? styles.lightText : styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
