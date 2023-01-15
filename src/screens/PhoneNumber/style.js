import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bg: {
    height: sizes.screenHeight,
  },
  heading: {
    color: colors.white,
    fontSize: fontSize.h3,
    fontWeight: 'bold',
  },
  paddingHeading: {
    paddingTop: sizes.screenHeight * 0.18,
    paddingLeft: sizes.screenWidth * 0.08,
  },
  text: {
    color: colors.disabledBg2,
    fontWeight: '300',
    paddingRight: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.82,
    marginTop: sizes.screenHeight * 0.01,
  },
  inputView: {
    marginTop: sizes.screenHeight * 0.04,
    alignSelf: 'center',
  },
  buttonTop: {
    marginTop: sizes.screenHeight * 0.07,
  },
  inputContainer: {
    backgroundColor: 'transparent',
    color: colors.white,
    borderWidth: 1,
    height: sizes.screenHeight * 0.08,
    borderColor: colors.primary,
    borderRadius: sizes.screenWidth * 0.01,
    width: sizes.screenWidth * 0.85,
  },
  textContainer: {
    backgroundColor: 'transparent',
    color: colors.white,
  },
  inputStyle: {
    color: colors.white,
    fontWeight: '300',
    height: sizes.screenHeight * 0.08,
  },
  codeText: {
    color: colors.white,
    fontWeight: '300',
  },
  flagBg:{
    backgroundColor: 'transparent',
  }
});
