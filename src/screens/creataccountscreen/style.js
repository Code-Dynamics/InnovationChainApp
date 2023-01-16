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
  creactaccountlogo: {
    marginVertical: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.11,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttondiv: {
    marginVertical: sizes.screenHeight * 0.05,
  },
});
