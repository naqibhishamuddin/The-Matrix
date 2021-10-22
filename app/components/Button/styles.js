import {StyleSheet} from 'react-native';
import {color} from 'misc';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(0.5),
    width: wp(80),
    height: hp(6),
    alignSelf: 'center',
  },
  buttonText: {
    color: color.white,
  },
});
