import { Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { height } = Dimensions.get('window');
const screenDimension =
  height > 641 ? (height > 732 ? 'big' : 'medium') : 'small';
const colorDark = {
  primary: '#242424', // All "background".
  primaryText: '#64EEBC', // font primary
  text: '#FFFFFF', // Text
  highlight: 'rgba(0, 0, 0, 0.5)', // Modals
  disabled: 'rgba(255,255,255,0.5)', // buttom desabled
  placeholder:'rgba(255,255,255,0.6)', // Placeholder color, 
  error: '#FF0000',
};

const font = {
  light: 'BebasNeue-Light',
  regular: 'BebasNeue-Regular',
  bold: 'BebasNeue-Bold',
};

const fontSize = {
  xs: hp(1.40625),
  sm: hp(1.6875),
  sm2: hp(1.8),
  base: hp(1.9687),
  lg: hp(2.25),
  xl: hp(2.5312),
  xl2: hp(2.8125),
  xl3: hp(4),
  textTitle: hp(7),
};

export const themeApp = {
  fontSize,
  wp,
  hp,
  screenDimension,

  colorError: colorDark.error,
  colorSuccess: colorDark.primaryText,
  placeholder: colorDark.placeholder,
  shadowPoster: [
    'rgba(36,36,36,0.5)',
    'rgba(36,36,36,0)',
    'rgba(36,36,36,0.5)',
    'rgba(36,36,36,1)',
  ],
  shadowBackdrop: [
    'rgba(36,36,36,0)',
    'rgba(36,36,36,0.5)',
    'rgba(36,36,36,0.8)',
  ],
  backgroundStyle: {
    backgroundColor: colorDark.primary,
  },
  backgroundDisabled: {
    backgroundColor: colorDark.disabled,
  },
  tabBarStyle: {
    backgroundColor: colorDark.primary,
    borderTopWidth: 0,
  },
  primaryText: {
    color: colorDark.primaryText,
    fontFamily: font.bold,
    fontSize: fontSize.textTitle,
    letterSpacing: 12,
    textAlign: 'center',
  },
  TitleTextBold: {
    color: colorDark.text,
    fontFamily: font.bold,
    fontSize: fontSize.xl,
    letterSpacing: 4,
    textAlign: 'center',
  },
  TitleTextLight: {
    color: colorDark.text,
    fontFamily: font.regular,
    fontSize: fontSize.xl,
    letterSpacing: 4,
    textAlign: 'center',
  },

  TitleTextLightGreen: {
    color: colorDark.primaryText,
    fontFamily: font.regular,
    fontSize: fontSize.xl,
    letterSpacing: 4,
    textAlign: 'center',
  },

  ButtonWithBorder: {
    backgroundColor: colorDark.primary,
    borderWidth: 1,
    borderColor: colorDark.text,
    height: hp('7%'),
    width: wp('67%'),
  },
  ButtonWithoutBorder: {
    backgroundColor: colorDark.primary,
    height: hp('7%'),
    width: wp('67%'),
  },
  ButtonBackground: {
    backgroundColor: colorDark.text,
    height: hp('7%'),
    width: wp('67%'),
  },
  ButtonBackgroundDisabled: {
    backgroundColor: colorDark.disabled,
    height: hp('7%'),
    width: wp('67%'),
  },
  textRegular: {
    color: colorDark.text,
    fontFamily: font.regular,
    fontSize: fontSize.base,
    letterSpacing: 4,
  },
  textRegularButton: {
    color: colorDark.primary,
    fontFamily: font.regular,
    fontSize: fontSize.base,
    letterSpacing: 4,
  },
  textRegularGreen: {
    color: colorDark.primaryText,
    fontFamily: font.regular,
    fontSize: fontSize.base,
    letterSpacing: 4,
  },
  textRegularTrans: {
    color: colorDark.disabled,
    fontFamily: font.regular,
    fontSize: fontSize.base,
    letterSpacing: 4,
  },
  textBold: {
    color: colorDark.text,
    fontFamily: font.bold,
    fontSize: fontSize.base,
    letterSpacing: 4,
  },
  TouchableHighlight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorDark.highlight,
  },
};
