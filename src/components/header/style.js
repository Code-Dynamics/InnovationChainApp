import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {height, width} from 'react-native-dimension';

export const styles = StyleSheet.create({
  iconTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hedtex: {
    color: colors.white,
    textTransform: 'capitalize',
    fontSize: fontSize.regular,
  },
});
