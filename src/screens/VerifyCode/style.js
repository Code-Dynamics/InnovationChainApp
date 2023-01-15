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
    textAlign: 'center',
  },
  paddingHeading: {
    paddingTop: sizes.screenHeight * 0.1,
  },
  text: {
    color: colors.disabledBg2,
    fontWeight: '300',
    marginTop: sizes.screenHeight * 0.01,
    textAlign: 'center',
  },
  text2: {
    color: colors.disabledBg2,
    fontWeight: '300',
    textAlign: 'center',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.09,
    lineHeight: sizes.screenHeight * 0.08,
    fontSize: fontSize.h1,
    fontWeight: 'bold',
    borderRadius: sizes.screenWidth * 0.02,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    color: colors.black,
  },
  focusCell: {
    borderColor: colors.primary,
    borderWidth: 1,

    backgroundColor: 'transparent',
    color: colors.black,
  },
  codeView: {width: 290, alignSelf: 'center'},
  top: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  sendBtn: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.1,
  },
  btnText: {
    color: '#EF753F',
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },
});
