import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: Colors.themeBlack},
  scrollView: {
    backgroundColor: Colors.themeBlack,
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: hp('5'),
  },
  whiteCircle: {
    height: hp('22'),
    width: wp('32'),
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileView: {
    width: Dimensions.get('window').width * 0.31,
    height: Dimensions.get('window').width * 0.31,
  },
  addIcon: {
    position: 'absolute',
    left: wp('10'),
    height: hp('6'),
    top: hp('13'),
  },
  name: {
    fontSize: hp('3.5'),
    fontWeight: 'bold',
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
    height: hp('65'),
  },
  headingText: {
    fontWeight: '400',
    fontSize: hp('3'),
    textAlign: 'center',
    marginTop: hp('2'),
  },
  divider: {width: wp('15'), height: hp('5'), alignSelf: 'center'},
  inputView: {
    flexDirection: 'row',
    width: wp('93'),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightBlack,
    height: hp('6'),
    marginTop: hp('3'),
    alignItems: 'center',
  },
  icon: {width: wp('10'), height: hp('3')},
  dec: {
    fontSize: hp('1.8'),
    marginLeft: wp('5'),
    marginTop: hp('1'),
  },
  btn: {width: wp('93'), alignSelf: 'center', marginTop: hp('7')},
});
