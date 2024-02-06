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
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: wp('100'),
    height: hp('100'),
    opacity: 0.9,
  },
  modalData: {
    // height: tripType ? hp('40') : hp('30'),
    backgroundColor: Colors.themeBlack,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 3,
    shadowRadius: 7.68,
    elevation: 20,
    width: wp('100'),
    paddingHorizontal: wp('5'),
    // height: hp('40'),
  },
  divider: {width: wp('15'), height: hp('5'), alignSelf: 'center'},
  headingText: {
    fontWeight: '400',
    fontSize: hp('3'),
    textAlign: 'center',
    marginTop: hp('2'),
  },
  btn: {width: wp('93'), alignSelf: 'center', marginTop: hp('7')},
});
