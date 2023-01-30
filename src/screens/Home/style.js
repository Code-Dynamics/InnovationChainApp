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
    width: sizes.screenWidth * 0.24,
    height: sizes.screenHeight * 0.11,
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
  teamimage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.2,
  },
  scrolviewconatainer: {
    marginHorizontal: sizes.screenWidth * 0.01,
  },
  scrlmaincontainer: {
    paddingVertical: sizes.screenHeight * 0.02,
  },
  coinmainbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.coinbox,
    width: sizes.screenWidth * 0.43,
    // paddingVertical: 2,
    height: sizes.screenHeight * 0.18,
    borderRadius: sizes.screenWidth * 0.02,
    marginHorizontal: sizes.screenWidth * 0.01,
    marginVertical: sizes.screenHeight * 0.01,
  },
  coinlogobg: {
    width: sizes.screenWidth * 0.14,
    height: sizes.screenHeight * 0.05,
    backgroundColor: colors.black,
    marginVertical: sizes.screenHeight * 0.01,
  },
  coinlogobgvect: {
    width: sizes.screenWidth * 0.14,
    height: sizes.screenHeight * 0.05,
    backgroundColor: colors.black,
    marginVertical: sizes.screenHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinpricetitle: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '700',
    marginVertical: sizes.screenHeight * 0.001,
  },
  coinprice: {
    color: colors.cointext,
    fontSize: fontSize.regular,
    fontWeight: '400',
    marginVertical: sizes.screenHeight * 0.01,
  },
  maincoincontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  livehead: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '700',
  },
  livechilxontainer: {
    flexDirection: 'row',
  },
  liveupdate: {
    color: colors.white,
    fontSize: fontSize.small,
    fontWeight: '500',
  },
  liveupdateper: {
    color: colors.green,
    fontSize: fontSize.small,
    fontWeight: '500',
  },
  liveupademaincontainer: {
    width: sizes.screenWidth * 0.4,
  },
  liveupdtecontainer: {
    paddingVertical: sizes.screenHeight * 0.03,
  },
});
