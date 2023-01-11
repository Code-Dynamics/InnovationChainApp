import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  hedercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hedericon: {
    color: colors.primary,
    fontSize: fontSize.h4,
  },
  headertititle: {
    color: colors.white,
    fontSize: fontSize.medium,
    bottom: sizes.screenHeight * 0.001,
  },
  sub: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});
