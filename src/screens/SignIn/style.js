import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bg: {
    height: sizes.screenHeight,
  },
  icon: {
    marginTop: sizes.screenHeight * 0.15,
    height: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.59,
    alignSelf: 'center',
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.06,
  },
  paddingTop2: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  heading: {
    color: colors.primary,
    alignSelf: 'center',
    fontSize: fontSize.h4,
    fontWeight: 'bold',
  },
  subHeading: {
    color: colors.disabledText,
    alignSelf: 'center',
    paddingBottom: sizes.screenHeight * 0.02,
    // fontSize: fontSize.h6,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    width: sizes.screenWidth * 0.3,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
  width: {
    width: sizes.screenWidth * 0.19,
  },
  flex2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginRight: {marginRight: sizes.screenWidth * 0.05},
  paddingTop3: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  footerTop: {
    marginTop: sizes.screenHeight * 0.05,
  },
});
