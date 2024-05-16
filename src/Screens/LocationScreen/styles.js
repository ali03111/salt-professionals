import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  flatListView: {
    width: wp('95'),
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: wp('2'),
    paddingVertical: hp('2'),
    marginTop: hp('2'),
    borderRadius: 10,
  },
  divider: {
    width: wp('85'),
    marginVertical: hp('2'),
    alignSelf: 'center',
  },
  btn: {
    width: wp('90'),
    alignSelf: 'center',
    marginBottom: Platform.OS == 'ios' ? hp('5') : hp('2'),
  },
});
