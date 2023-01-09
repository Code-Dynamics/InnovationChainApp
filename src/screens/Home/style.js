import {StyleSheet} from 'react-native';
import {height} from 'react-native-dimension';
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
  profilediv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileInnerdiv: {
    flexDirection: 'row',
  },
  proimg: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.07,
  },
  profilenamediv: {
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.02,
  },
  profilewellcome: {
    color: colors.white,
    fontSize: fontSize.extraSmall,
  },
  profilename: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '700',
  },
  notifyicon: {
    backgroundColor: colors.notify,
    color: colors.black,
    width: sizes.screenWidth * 0.09,
    height: sizes.screenHeight * 0.04,
    borderRadius: sizes.screenWidth * 0.09,
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingVertical: sizes.screenHeight * 0.001,
  },
  icondiv: {
    justifyContent: 'center',
  },
});
