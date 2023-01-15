import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fontFamily, fontSize} from '../../services';
import {styles} from './style';

export const CustomTextFiel = ({
  value,
  label,
  setValue,
  secureTextEntry,
  editable,
  type,
  right,
  left,
  placeholder,
}) => {
  return (
    //   <View style={styles.container}>
    <View style={styles.fieldcontainer}>
      <TextInput
        mode="contain"
        //   style={styles.input}
        value={value}
        label={label}
        onChangeText={setValue}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        activeUnderlineColor={colors.primary}
        editable={editable}
        keyboardType={type}
        style={styles.textstyle}
        right={right}
        left={left}
        textColor={colors.white}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
      />
    </View>
  );
};
