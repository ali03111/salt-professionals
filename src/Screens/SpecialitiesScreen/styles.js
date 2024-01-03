import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  arryView: {
    width: wp('95'),
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.grayFaded,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: hp('1'),
    paddingHorizontal: wp('2'),
    marginTop: hp('1'),
  },
  textView: {
    paddingVertical: hp('1'),
    paddingHorizontal: wp('2'),
    borderRadius: 5,
    backgroundColor: Colors.lightBlack,
    marginVertical: hp('0.5'),
    marginHorizontal: wp('0.7'),
  },
});
