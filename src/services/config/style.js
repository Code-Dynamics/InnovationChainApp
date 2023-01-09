import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  border: {
    borderTopWidth: 3,
    bottom: sizes.screenHeight * 0.01,
    borderTopColor: colors.primary,
  },
});
