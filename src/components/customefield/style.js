import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  textstyle: {
    backgroundColor: colors.fieldbg,
    fontSize: fontSize.large,
  },
  fieldcontainer: {
    marginVertical: sizes.screenHeight * 0.02,
  },
});
