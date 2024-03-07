import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  notifyMain: {
    backgroundColor: Colors.themeBlack,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('1'),
  },
});
