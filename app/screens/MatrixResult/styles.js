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
    alignItems: 'center',
  },
  answer: {
    fontSize: hp(10),
    color: color.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp(5),
  },
  title: {
    fontSize: font.xl,
    fontWeight: '500',
    marginBottom: hp(2),
    marginTop: hp(5),
  },
  description: {
    color: color.lightGray,
    lineHeight: hp(2.5),
    fontSize: font.small,
  },
  button: {
    position: 'absolute',
    bottom: hp(10),
  },
});
