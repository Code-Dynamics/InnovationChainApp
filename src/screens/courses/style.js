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
  corseprofileimage: {
    width: sizes.screenWidth * 0.076,
    height: sizes.screenHeight * 0.035,
  },
  paidcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paidcoursetex: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  searchicon: {
    color: colors.white,
  },
  searchcontainer: {
    paddingVertical: sizes.screenHeight * 0.02,
  },
  Choosecoursecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tabbuttonactive: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenWidth * 0.05,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: sizes.screenWidth * 0.02,
  },
  tabbuttonNonactive: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenWidth * 0.05,
    backgroundColor: colors.coinbox,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: sizes.screenWidth * 0.02,
  },
  tabtext: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  tabmaincontainer: {
    marginVertical: sizes.screenHeight * 0.04,
  },
  cardcontentcontainer: {
    flexDirection: 'row',
  },
  cardcontentbuttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.001,
  },
  cardbgcolor: {
    backgroundColor: colors.coinbox,
    padding: sizes.baseMargin,
    borderRadius: sizes.screenWidth * 0.05,
    justifyContent: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },
  crdiconncontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: sizes.TinyMargin,
  },
  videoname: {
    color: colors.white,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  hostname: {
    color: colors.cardtext,
    fontSize: fontSize.smallM,
    fontWeight: '500',
    opacity: 0.2,
    marginHorizontal: sizes.screenWidth * 0.02,
  },
  price: {
    color: colors.primary,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  duration: {
    color: colors.black,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  hourindication: {
    backgroundColor: colors.primary,
    padding: sizes.TinyMargin,
    borderRadius: sizes.screenWidth * 0.05,
    marginHorizontal: sizes.screenWidth * 0.02,
  },
  crddetail: {
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.04,
  },
  crdim: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.1,
  },
  parentcontainerCard: {
    padding: sizes.TinyMargin,
    marginVertical: sizes.screenHeight * 0.03,
  },
  scrolpadding: {
    paddingVertical: sizes.screenHeight * 0.02,
  },
});
