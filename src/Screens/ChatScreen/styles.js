import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    // marginTop: Platform.OS == 'ios' ? hp('6') : hp('3'),
    paddingHorizontal: wp('5'),
    paddingBottom: hp('3'),
    backgroundColor: Colors.themeRed,
    paddingTop: Platform.OS == 'ios' ? hp('6') : hp('2'),
    height: Platform.OS == 'ios' ? hp('12') : hp('8'),
    alignItems: 'center',
  },
  HeaderLeft: {
    flex: 0.2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  arrowback: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    width: wp('7'),
  },
  HeaderCenter: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
    height: hp('5'),
    textAlignVertical: 'center',
    flexDirection: 'row',
    // marginTop: hp('3'),
  },
  HeaderRight: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backMain: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'flex-end',

    // backgroundColor: 'red',
  },
});
