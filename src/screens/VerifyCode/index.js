import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors, sizes} from '../../services';
import images from '../../services/utilites/images';
import {styles} from './style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import {Header} from '../../components';

export default function VerifyCode() {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleSelected = val => {
    console.log(val);
    // let temp = [...selectedValue,val]
  };
  const handleInput = val => {
    console.log(val);
    setValue(val);
  };
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={images.background} style={styles.bg}>
          <Header dark={true} />
          <View style={styles.paddingHeading}>
            <Text style={styles.heading}>00:42</Text>
            <Text style={styles.text}>Type the verification code</Text>
            <Text style={styles.text2}>we’ve sent you</Text>
          </View>
          <View style={styles.codeView}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={text => handleInput(text)}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              // keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View key={index}>
                  <Text
                    key={`value-${index}`}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={styles.top}>
            <VirtualKeyboard
              color="white"
              pressMode="number"
              onPress={val => handleSelected(val)}
            />
          </View>
          <TouchableOpacity style={styles.sendBtn}>
            <View>
              <Text style={styles.btnText}>Send again</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
