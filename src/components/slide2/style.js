import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    padding: sizes.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.04,
  },
  payratext: {
    color: colors.payracolor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  payracontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.03,
  },
  butoncontainer: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  footertext: {
    color: colors.payracolor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerContainer: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  footertextsigin: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nonactivedot: {
    color: colors.dot,
  },
  activedot: {
    color: colors.primary,
    left: 10,
  },
  dotcontainer: {
    marginTop: sizes.screenHeight * 0.04,
    display: 'flex',
    flexDirection: 'row',
  },
});
