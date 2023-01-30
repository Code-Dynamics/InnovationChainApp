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
    backgroundColor: colors.black,
  },
  textcontainer: {
    paddingVertical: sizes.screenHeight * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.02,
  },
  textinner: {fontSize: fontSize.regular, color: colors.white},
});
