import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: Colors.themeBlack},
  scrollView: {
    flexGrow: 1,
    backgroundColor: Colors.themeBlack,
    paddingBottom: hp('10'),
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp('3'),
    marginTop: hp('2'),
  },
  subText: {
    textAlign: 'center',
    fontSize: hp('1.5'),
  },
  touchView: {width: wp('90'), alignSelf: 'center', marginVertical: hp('3')},
  addView: {
    backgroundColor: Colors.lightBlack,
    width: wp('30'),
    height: hp('4'),
    alignSelf: 'flex-end',
  },
  innerView: {
    width: wp('90'),
    height: hp('6'),
    paddingHorizontal: wp('1.5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: Colors.lightBlack,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginVertical: hp('1'),
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 3,
    shadowRadius: 7.68,
    elevation: 20,
  },
  arryView: {
    width: wp('90'),
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.lightBlack,
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
  headingText: {
    fontSize: hp('1.8'),
    marginLeft: wp('5'),
    marginTop: hp('2'),
  },
});
