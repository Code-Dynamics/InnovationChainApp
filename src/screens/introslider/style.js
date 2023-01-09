import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: sizes.screenHeight,
    padding: sizes.baseMargin,
  },
  slidermainimage: {
    width: sizes.screenWidth * 0.57,
    height: sizes.screenHeight * 0.3,
  },
  center: {
    marginTop: sizes.screenHeight * 0.19,
    // backgroundColor: colors.appBgColor1,
    width: sizes.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hed: {
    color: colors.primary,
    fontSize: fontSize.h1,
    fontWeight: 'bold',
  },
  headingcotainer: {
    paddingTop: sizes.screenHeight * 0.1,
  },
  payratext: {
    color: colors.payracolor,

    fontWeight: 'bold',
  },
  payracontainer: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  butoncontainer: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  widthslid: {
    width: sizes.screenWidth * 0.2,
  },
});
