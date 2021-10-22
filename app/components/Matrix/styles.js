import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, font} from 'misc';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    width: wp(90),
    height: hp(6),
    paddingTop: hp(1),
    borderRadius: hp(1.2),
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: hp(2),
  },
  icon: {
    marginTop: hp(0.7),
  },
  activeContainer: {
    borderColor: 'blue',
  },
  placeholder: {
    fontSize: font.xs,
    color: color.lightGray,
  },
  inputContainer: {marginLeft: wp(4)},
  textInput: {
    flex: 1,
    fontSize: font.xs,
    marginBottom: hp(1),
  },
});
