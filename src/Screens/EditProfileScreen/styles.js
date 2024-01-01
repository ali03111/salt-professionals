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
});
