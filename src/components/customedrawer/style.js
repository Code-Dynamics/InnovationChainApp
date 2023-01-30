import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  drawercontain: {
    flex: 1,
    backgroundColor: colors.black,
  },
  profilecontainerdwer: {
    paddingVertical: sizes.screenHeight * 0.05,
    paddingHorizontal: sizes.screenWidth * 0.03,
    backgroundColor: colors.coinbox,
  },
  proimg: {
    width: sizes.screenWidth * 0.24,
    height: sizes.screenHeight * 0.11,
  },
  profilename: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '700',
  },
  profilenamediv: {
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.02,
  },
  profilename2: {
    paddingVertical: sizes.screenWidth * 0.02,
  },
  icondiv: {
    width: sizes.screenWidth * 0.09,
    height: sizes.screenHeight * 0.04,
    borderRadius: sizes.screenWidth * 0.09,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: sizes.screenWidth * 0.02,
    top: sizes.screenHeight * 0.03,
  },
  icon: {
    fontSize: fontSize.h3,
  },
  drerliscontainer: {
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenHeight * 0.03,
  },
  dwerlistext: {
    fontSize: fontSize.h6,
    paddingHorizontal: sizes.screenWidth * 0.02,
    fontWeight: '600',
    color: colors.black,
  },
  dwerlistexwhite: {
    fontSize: fontSize.regular,
    paddingHorizontal: sizes.screenWidth * 0.02,
    // fontWeight: '600',
    color: Colors.white,
  },
  listbut: {
    flexDirection: 'row',
    paddingVertical: sizes.screenWidth * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.02,
    backgroundColor: colors.primary,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.02,
  },
  listbutblack: {
    flexDirection: 'row',
    paddingVertical: sizes.screenWidth * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.02,
    backgroundColor: colors.black,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  singleviewlisfeature: {
    marginVertical: sizes.screenHeight * 0.03,
  },
});
