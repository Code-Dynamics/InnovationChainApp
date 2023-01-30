import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
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
  mini: {
    justifyContent: 'center',
    alignItems: 'center',
    top: sizes.screenHeight * 0.1,
    zIndex: 999,
  },
  uperiimcon: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.coinbox,
    borderRadius: sizes.screenWidth * 0.08,
  },
  desh: {
    color: colors.primary,
    fontSize: fontSize.regular,
  },
  modal: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    marginTop: sizes.screenHeight * 0.07,
    borderTopRightRadius: sizes.screenWidth * 0.13,
    borderTopLeftRadius: sizes.screenWidth * 0.13,
    alignSelf: 'center',
    backgroundColor: colors.modalBg,
  },
  profilediv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.07,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  profileInnerdiv: {
    flexDirection: 'row',
  },
  proimg: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.154,
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
    fontSize: fontSize.h6,
    fontWeight: '700',
  },
  onlineBadge: {
    alignSelf: 'center',
  },
  padding: {
    paddingHorizontal: sizes.screenWidth * 0.01,
  },
  onlineText: {
    color: colors.disabledBg2,
    fontWeight: '300',
    fontSize: fontSize.smallM,
  },
  center: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  top: {
    marginTop: sizes.screenHeight * 0.04,
  },
  todayText: {
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
    paddingHorizontal: sizes.screenWidth * 0.01,
  },
  grayLine: {
    width: sizes.screenWidth * 0.38,
  },
  chatBox: {
    // marginTop: sizes.screenHeight * 0.03,
    backgroundColor: colors.tab,
    width: sizes.screenWidth * 0.6,
    marginHorizontal: sizes.screenWidth * 0.1,
    borderRadius: sizes.screenWidth * 0.03,
    borderBottomLeftRadius: 0,
    padding: sizes.screenWidth * 0.03,
  },
  chatTop: {
    marginTop: sizes.screenHeight * 0.03,
  },
  chatBox2: {
    // marginTop: sizes.screenHeight * 0.03,
    backgroundColor: colors.tab,
    width: sizes.screenWidth * 0.6,
    marginHorizontal: sizes.screenWidth * 0.3,
    borderRadius: sizes.screenWidth * 0.03,
    borderBottomRightRadius: 0,
    padding: sizes.screenWidth * 0.03,
  },
  message: {
    color: colors.white,
    textAlign: 'justify',
    fontWeight: '300',
    fontSize: fontSize.regular,
  },
  time: {
    marginHorizontal: sizes.screenWidth * 0.1,
    top: sizes.screenHeight * 0.002,
  },
  time2: {
    marginHorizontal: sizes.screenWidth * 0.74,
    width: sizes.screenWidth,
    top: sizes.screenHeight * 0.003,
    alignItems: 'center',
  },
  timeText: {
    color: colors.disabledBg2,
    fontWeight: '300',
    fontSize: fontSize.smallM,
    top: sizes.screenHeight * 0.002,
  },
  msgInput: {
    backgroundColor: colors.tab,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.27,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.01,
    // marginVertical: sizes.screenHeight * 0.02,
  },
  input: {
    color: colors.white,
    paddingLeft: sizes.screenWidth * 0.035,
    fontWeight: '300',
    fontSize: fontSize.regular,
  },
  chatIcon: {
    position: 'absolute',
    left: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },
});
