import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: Colors.themeBlack},
  modalView: {
    width: wp('100'),
    height: Platform.OS == 'ios' ? hp('45') : hp('40'),
    backgroundColor: Colors.themeBlack,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    paddingHorizontal: wp('5.5'),
    paddingVertical: hp('5'),
  },
  decView: {
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // borderColor: 'gray',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: Colors.themeBlack,
    alignItems: 'center',
    paddingHorizontal: wp('2'),
    marginTop: hp('2'),
  },
  locIcon: {width: wp('5'), height: hp('5'), marginRight: wp('1')},
  rangeSld: {
    width: wp('95'),
    height: hp('2'),
    marginLeft: wp('-3'),
    marginTop: hp('1'),
  },
  rangeView: {
    width: wp('90'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp('2'),
  },
  kmText: {
    width: wp('43'),
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    paddingVertical: hp('1'),
    paddingHorizontal: wp('2'),
  },
  btn: {
    width: wp('90'),
    alignSelf: 'center',
    marginVertical: hp('2'),
  },
  staticMapImg: {
    height: hp('60'),
  },
});
