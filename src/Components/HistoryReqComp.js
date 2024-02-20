import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {CircleImage} from './CircleImageComponent';
import {downArrow, information} from '../Assets';
import ThemeButton from './ThemeButton';
import {Colors} from '../Theme/Variables';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HistoryReqComp = ({data, viewStyle}) => {
  return (
    <View style={{...styles.comingView, ...viewStyle}}>
      <View style={styles.bottomView}>
        <MaterialCommunityIcons
          name="calendar-month-outline"
          color="white"
          size={hp('3')}
        />
        <TextComponent text={data?.date} fade={true} styles={styles.dateText} />
        <MaterialCommunityIcons
          name="clock-outline"
          color="white"
          size={hp('3')}
        />
        <TextComponent text={data?.time} fade={true} styles={styles.timeText} />
      </View>
      <View style={styles.userView}>
        <CircleImage image={data?.image} uri={true} />
        <View style={styles.nameView}>
          <TextComponent
            text={`${data?.name}`}
            styles={{fontSize: hp('1.8'), fontWeight: 'bold'}}
          />
          <TextComponent
            text={`${data?.location}`}
            fade={true}
            styles={{
              fontSize: hp('1.8'),
              width: wp('65'),
            }}
            numberOfLines={1}
          />
        </View>
        <Image
          source={information}
          resizeMode="contain"
          style={styles.infIcon}
        />
      </View>
      <TextComponent
        text={'Appointment Details'}
        styles={{marginTop: hp('3'), marginLeft: wp('3')}}
      />
      <View style={styles.bottomTextView}>
        {['pny tall', 'Extra Small', 'CHain legth', 'House Call'].map(res => {
          return <TextComponent text={res} styles={styles.roundText} />;
        })}
      </View>
      {/* <View style={styles.viewBtnView}>
        <ThemeButton
          title={'Chat'}
          style={{...styles.viewAppBtn, backgroundColor: 'red'}}
          textStyle={{fontSize: hp('1.5')}}
        />
        <ThemeButton
          title={'View Details'}
          style={styles.viewAppBtn}
          image={downArrow}
          imageStyle={{
            tintColor: 'white',
            width: wp('2.5'),
            marginLeft: wp('2'),
          }}
          textStyle={{fontSize: hp('1.5')}}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  comingView: {
    width: wp('90'),
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // height: hp('10'),
    // paddingVertical: hp('2'),
    // paddingHorizontal: wp('3'),
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
    // height: hp('22'),
    // backgroundColor: 'white',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: wp('2'),
    // marginTop: hp('1'),
    width: wp('90'),
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: hp('5'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: wp('0'),
    // borderRadius: 10,
  },
  dateText: {
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
    marginRight: wp('5'),
    color: 'white',
  },
  timeText: {
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
    color: 'white',
  },
  userView: {
    flexDirection: 'row',
    width: wp('90'),
    paddingHorizontal: wp('2'),
    marginTop: hp('1'),
  },
  nameView: {marginLeft: wp('2'), justifyContent: 'space-between'},
  infIcon: {
    width: wp('6'),
    height: hp('5'),
    marginLeft: wp('1'),
  },
  viewBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2'),
    alignItems: 'center',
  },
  viewAppBtn: {
    backgroundColor: Colors.lightBlack,
    width: wp('40'),
    height: hp('5'),
    alignItems: 'center',
    fontSize: hp('1.5'),
  },
  roundText: {
    paddingHorizontal: wp('2'),
    paddingVertical: hp('0.5'),
    backgroundColor: Colors.lightBlack,
    width: 'auto',
    borderRadius: 5,
    fontSize: hp('1.8'),
    marginVertical: hp('1.5'),
  },
  bottomTextView: {
    flexDirection: 'row',
    width: wp('85'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    //   marginVertical: hp('2'),
    flexWrap: 'wrap',
    marginBottom: hp('0.5'),
  },
});
