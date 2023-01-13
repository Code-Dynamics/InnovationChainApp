import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    backgroundColor: colors.screbackcolor,
    height: sizes.screenHeight,
    padding: sizes.baseMargin,
  },
  hedingmaincontainer: {
    marginVertical: sizes.screenHeight * 0.04,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  settingicon: {
    // width: sizes.screenWidth * 0.06,
    // height: sizes.screenHeight * 0.06,
  },
  setticon: {
    fontSize: fontSize.medium,
    color: colors.white,
  },
  hedingtext: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight: '600',
  },
  hedingtextcontainer: {
    paddingHorizontal: sizes.screenWidth * 0.03,
  },
  ListmainChildcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Listmaincontainer: {
    paddingVertical: sizes.screenHeight * 0.01,
    backgroundColor: colors.coinbox,
    paddingHorizontal: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
  },
  listtext: {
    fontSize: fontSize.regular,
    fontWeight: '400',
    color: colors.white,
    textTransform: 'capitalize',
  },
  listtextcontainer: {
    paddingHorizontal: sizes.screenWidth * 0.03,
  },
  arrowicon: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  magintop: {
    marginVertical: sizes.screenHeight * 0.04,
  },
});
