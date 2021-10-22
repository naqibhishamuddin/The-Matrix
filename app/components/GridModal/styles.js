import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, font} from 'misc';

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    width: wp(100),
    height: hp(60),
    backgroundColor: color.white,
    borderRadius: hp(1),
    paddingHorizontal: wp(6),
    paddingVertical: hp(4),
  },
  title: {
    fontSize: font.large,
    fontWeight: '500',
    marginBottom: hp(1.5),
    color: color.primary,
  },
  description: {
    fontSize: font.small,
    color: color.lightGray,
    lineHeight: hp(2.5),
    marginBottom: hp(4),
  },
  placeholder: {
    fontSize: font.small,
    marginRight: wp(10),
  },
  inputSpinner: {
    marginBottom: hp(4),
  },
  button: {
    position: 'absolute',
    bottom: hp(7),
  },
});
