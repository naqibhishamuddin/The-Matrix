import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {font, color} from 'misc';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  button: {
    position: 'absolute',
    bottom: hp(15),
  },
  header: {
    fontSize: font.xxl,
    fontWeight: '500',
    marginBottom: hp(4),
    marginTop: hp(20),
  },
  description: {
    color: color.lightGray,
    lineHeight: hp(3),
  },
});
