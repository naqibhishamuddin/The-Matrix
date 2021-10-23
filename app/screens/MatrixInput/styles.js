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
    backgroundColor: color.white,
  },
  scrollview: {
    flex: 1,
    backgroundColor: color.white,
  },
  button: {
    marginVertical: hp(5),
  },
  title: {
    fontSize: font.xl,
    fontWeight: '500',
  },
  description: {
    color: color.lightGray,
    marginTop: hp(2),
    marginBottom: hp(5),
    lineHeight: hp(3),
  },
});
