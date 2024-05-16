import {Dimensions} from 'react-native';
import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform} = require('react-native');
const {Colors} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.black,
    paddingBottom: hp('2'),
  },
  bgImg: {
    width: wp('100'),
    // height: hp('60'),
    marginTop: hp('-3'),
  },
  codeFieldRoot: {marginTop: hp('5'), width: wp('90'), alignSelf: 'center'},
  cell: {
    width: wp('10'),
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: Colors.grayFaded,
    textAlign: 'center',
    color: 'white',
  },
  focusCell: {
    borderColor: Colors.white,
    color: 'white',
  },
  verificationBtn: {
    // flexDirection: 'row',
    width: wp('90'),
    justifyContent: 'space-between',
    // position: 'absolute',
    left: wp('5'),
    height: hp('12'),
    marginTop: hp('17'),
  },
  otpSendView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: wp('65'),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: hp('2'),
  },
  OtpTextStyle: {
    fontSize: hp('2'),
    color: Colors.grayFaded,
    fontWeight: '500',
    letterSpacing: 0.25,
    textAlign: 'right',
  },
});
