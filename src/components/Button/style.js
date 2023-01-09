import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.015,
  },
  btnText: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  lightButton: {
    backgroundColor: '#191D23',
    padding: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.015,
  },
  lightText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
