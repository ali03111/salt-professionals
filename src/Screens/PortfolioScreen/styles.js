import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  imageView: {
    marginVertical: hp('2'),
    marginHorizontal: wp('2'),
    width: wp('45'),
    height: hp('20'),
    borderRadius: 10,
    overflow: 'hidden',
  },
});
