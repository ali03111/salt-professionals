import {Image, StyleSheet, View} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {TextComponent} from './TextComponent';
import {divider, information} from '../Assets';
import ThemeButton from './ThemeButton';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  extractTimeFromString,
  getDateMonthYear,
} from '../Utils/globalFunctions';
import {Touchable} from './Touchable';

export const AppointmentReqComp = ({item, viewStyle, onPress, onInfo}) => {
  const address = JSON.parse(item?.users?.location?.location);

  console.log(
    'lksdbvlkbsdklvblskdbvlksdbklvsd',
    item,
    extractTimeFromString(item?.time),
  );

  return (
    <View style={{...styles.mainView, ...viewStyle}}>
      <View style={styles.leftView}>
        <TextComponent
          text={getDateMonthYear(item?.date)?.day}
          styles={styles.dateText}
        />
        <TextComponent text={getDateMonthYear(item?.date)?.monthName} />
        <Image source={divider} resizeMode="contain" style={styles.divider} />
        <TextComponent text={extractTimeFromString(item?.time)} />
      </View>
      <View style={styles.rightView}>
        <View style={styles.upperView}>
          <TextComponent text={item?.users?.name} />
          <Touchable onPress={onInfo}>
            <Image
              source={information}
              resizeMode="contain"
              style={styles.infIcon}
            />
          </Touchable>
        </View>
        <TextComponent
          text={address?.currentLocation?.description}
          fade={true}
          styles={{fontSize: hp('1.4')}}
          numberOfLines={1}
        />
        <View style={styles.btnView}>
          <ThemeButton
            title={'Accept'}
            style={styles.accBtn}
            onPress={() => onPress({appId: item?.id, status: true})}
          />
          <ThemeButton
            title={'Reject'}
            style={styles.rjBtn}
            onPress={() => onPress({appId: item?.id, status: false})}
          />
        </View>
      </View>
    </View>
  );
};

export const AppointmentReqCompSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <View style={{flexDirection: 'row'}}>
        <SkeletonPlaceholder.Item
          width={wp('23')}
          height={hp('15')}
          marginTop={hp('2')}
        />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
        </SkeletonPlaceholder.Item>
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('90'),
    borderRadius: 10,
    height: hp('15'),
    // marginRight: wp('3'),
    borderWidth: 0.5,
    overflow: 'hidden',
    borderColor: Colors.lightBlack,
    flexDirection: 'row',
  },
  leftView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlack,
    width: wp('23'),
    overflow: 'hidden',
  },

  dateText: {fontWeight: 'bold', fontSize: hp('4')},
  divider: {width: wp('20'), height: hp('2')},
  rightView: {
    width: wp('62'),
    paddingHorizontal: wp('2'),
    justifyContent: 'center',
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infIcon: {
    width: wp('6'),
    height: hp('5'),
    // marginLeft: wp('1'),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('63'),
    marginTop: hp('1'),
  },
  accBtn: {width: wp('30'), height: hp('5'), borderRadius: 5},
  rjBtn: {
    width: wp('30'),
    height: hp('5'),
    borderRadius: 5,
    backgroundColor: Colors.lightBlack,
  },
});
