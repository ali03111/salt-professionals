import {Image, StyleSheet, View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import IconBtnView from '../../Components/IconBtnView';
import {divider} from '../../Assets';

export const MultiView = ({data, viewStyle}) => {
  return (
    <View style={{...styles.mainView, ...viewStyle}}>
      {data?.map((res, i) => {
        return (
          <View style={styles.listView}>
            {i > 0 && (
              <Image
                source={divider}
                resizeMode="contain"
                style={styles.divider}
              />
            )}
            <IconBtnView
              title={res?.title}
              leftIcon={res?.leftIcon}
              rightIcon={res?.rightIcon}
              rightText={res?.rightText}
              viewStyle={styles.innerView}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    // flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: Colors.grayFaded,
    // marginBottom: hp('2.5'),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 50,
    width: wp('92'),
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
    // paddingVertical: hp('2'),
    marginTop: hp('3'),
    justifyContent: 'space-between',
    // height: hp('50'),
    paddingBottom: hp('2'),
  },
  listView: {alignItems: 'center', justifyContent: 'center'},
  innerView: {
    borderWidth: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginTop: hp('1.8'),
  },
  divider: {width: wp('78'), marginLeft: wp('7')},
});
