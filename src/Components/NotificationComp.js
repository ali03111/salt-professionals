import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {CircleImage} from './CircleImageComponent';
import {TextComponent} from './TextComponent';
import {checked} from '../Assets';
import {Colors} from '../Theme/Variables';
import {imageUrl} from '../Utils/Urls';
import moment from 'moment';
import {Touchable} from './Touchable';
import TransparentBtn from './TransparentBtn';
import ThemeButton from './ThemeButton';

const NotificationComp = ({item, onPress, disabled, onStatusChange}) => {
  const appointment_status = item?.appointments?.appointment_request[0]?.status;

  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={styles.mainView}>
        <CircleImage
          image={imageUrl(item?.appointments?.users?.image)}
          uri={true}
          styles={styles.imageView}
        />
        <View style={styles.upperMainView}>
          <View style={styles.upperView}>
            <TextComponent text={item?.title} styles={{fontWeight: '600'}} />
            <TextComponent
              text={moment(item?.created_at).calendar()}
              styles={styles.time}
            />
          </View>
          <TextComponent text={item?.body} fade={true} styles={styles.des} />
        </View>
      </View>
      {appointment_status == 'requested' && (
        <View style={styles.invitationBtn}>
          <ThemeButton
            title={'Accept'}
            style={styles.acceptBtn}
            textStyle={styles.btnText}
            onPress={() =>
              onStatusChange({appId: item?.appointment_id, status: true})
            }
          />
          <TransparentBtn
            title={'Reject'}
            style={styles.rjBtn}
            textStyle={styles.whiteBtnText}
            onPress={() =>
              onStatusChange({appId: item?.appointment_id, status: false})
            }
          />
        </View>
      )}
      {appointment_status == 'accepted' && (
        <View style={styles.statusView}>
          <Image
            source={checked}
            style={styles.statusImg}
            tintColor={Colors.fadeGreen}
          />
          <TextComponent
            text={`Request${' Accepted'}`}
            styles={{
              fontSize: hp('1.5'),
              color: Colors.fadeGreen,
            }}
          />
        </View>
      )}
      {appointment_status == 'rejected' && (
        <View style={styles.statusView}>
          <Image
            source={checked}
            style={styles.statusImg}
            tintColor={Colors.themeRed}
          />
          <TextComponent
            text={`Request${' Rejected'}`}
            styles={{
              fontSize: hp('1.5'),
              color: Colors.themeRed,
            }}
          />
        </View>
      )}
    </Touchable>
  );
};
// moment(time).calendar()
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: wp('95'),
    paddingLeft: wp('2'),
    marginVertical: hp('1'),
  },
  imageView: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
  },
  upperMainView: {
    flex: 1,
    marginLeft: wp('2'),
    marginTop: hp('0.5'),
    // justifyContent: 'space-between',
  },
  upperView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1'),
  },
  time: {
    textAlign: 'right',
    fontSize: hp('1.4'),
    paddingRight: wp('2'),
  },
  des: {
    fontSize: hp('1.4'),
    paddingRight: wp('0.5'),
  },
  statusView: {
    flexDirection: 'row',
    width: wp('35'),
    justifyContent: 'space-between',
    marginLeft: wp('5'),
    alignItems: 'center',
  },
  statusImg: {
    resizeMode: 'contain',
    width: wp('6'),
  },
  invitationBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1'),
    width: wp('90'),
    alignSelf: 'center',
  },
  acceptBtn: {
    width: wp('42'),
    borderRadius: 5,
    marginBottom: hp('2.5'),
    height: hp('5'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: '400',
    marginLeft: wp('0'),
  },
  whiteBtn: {
    width: wp('40'),
  },
  rjBtn: {
    width: wp('42'),
    height: hp('5'),
    borderRadius: 5,
    backgroundColor: Colors.lightBlack,
    borderWidth: 0,
  },
  whiteBtnText: {
    marginLeft: wp('0'),
    color: 'white',
    fontSize: hp('1.8'),
  },
  acceptText: {
    fontSize: hp('2'),
    fontWeight: '500',
  },
});

export default NotificationComp;
