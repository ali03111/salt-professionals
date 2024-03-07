import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {CircleImage, CircleImageComponent} from './CircleImageComponent';
import ThemeButton from './ThemeButton';
import {checked, uncheck} from '../Assets';
import moment from 'moment';

export const NotifyComponent = ({image, name, description, time, status}) => {
  return (
    <View style={styles.invitationStyle}>
      <View style={styles.notificationMian}>
        <View style={styles.mainBannerImg}>
          <CircleImage image={image} />
        </View>
        <View style={styles.nameDescriptionMain}>
          <View style={styles.namestyle}>
            <TextComponent text={name} styles={styles.username} />
            <TextComponent
              text={moment(time).calendar()}
              styles={styles.timing}
            />
          </View>
          <View style={styles.descmain}>
            <TextComponent
              text={name + description}
              styles={styles.description}
            />
          </View>
        </View>
      </View>
      {status == 'null' && (
        <View style={styles.btns}>
          <ThemeButton
            title={'Accept'}
            style={styles.cancelBtn}
            textStyle={styles.cancelBtnText}
          />
          <ThemeButton
            title={'Reject'}
            style={styles.loginBtn}
            textStyle={styles.loginBtnText}
          />
        </View>
      )}
      {status == 'accepted' && (
        <View style={styles.status}>
          <Image source={checked} style={styles.statusImg} />
          <Text style={styles.acceptText}>Invitation Accepted</Text>
        </View>
      )}

      {status == 'rejected' && (
        <View style={styles.status}>
          <Image source={uncheck} style={styles.statusImg} />
          <TextComponent
            text={'Invitation Rejected.'}
            styles={styles.statusRejectText}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainBannerImg: {
    // flex: 0.2,
  },
  nameDescriptionMain: {
    flex: 1,
    marginLeft: hp('2'),
  },
  invitationStyle: {
    borderBottomWidth: 0.5,
    borderColor: Colors.grayBorder,
    marginBottom: hp('1'),
  },
  notificationMian: {
    flexDirection: 'row',
    paddingTop: hp('2'),
    paddingBottom: hp('.5'),

    alignItems: 'center',
  },
  bannerImg: {
    borderRadius: 50,
    width: wp('15'),
    height: hp('7.5'),
  },
  namestyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1'),
  },
  username: {
    fontWeight: 'bold',
    fontSize: hp('2'),
    flex: 1,
    color: Colors.white,
  },
  description: {
    fontSize: Platform.OS == 'ios' ? hp('1.5') : hp('1.8'),
    color: Colors.grayFaded,
    // backgroundColor: 'red',
    display: 'flex',
  },

  timing: {
    flex: 1,
    fontSize: hp('1.5'),
    textAlign: 'right',
    color: Colors.white,
  },
  groupName: {
    fontSize: Platform.OS == 'ios' ? hp('1.5') : hp('1.8'),
    color: Colors.black,
    fontWeight: '500',
  },
  descmain: {
    flexDirection: 'row',
    width: wp('77'),
    flexWrap: 'wrap',
  },
  invitationBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: hp('1'),
  },
  acceptBtn: {
    width: wp('44'),
    borderRadius: 13,
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
    marginTop: hp('2'),
  },
  whiteBtnText: {
    marginLeft: wp('0'),
  },
  acceptText: {
    fontSize: hp('1.8'),
    fontWeight: '500',
    color: Colors.textGreen,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5'),
  },
  statusImg: {
    resizeMode: 'contain',
    width: wp('6'),
    marginRight: wp('2'),
  },
  statusRejectText: {
    fontSize: hp('1.8'),
    fontWeight: '500',
    color: Colors.themeRed,
  },

  letterSt: {
    color: Colors.white,
    fontSize: hp('3'),
    fontWeight: '700',
  },
  image: {
    height: hp('6'),
    aspectRatio: 1,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('2'),
    paddingBottom: hp('3'),
    // paddingTop: hp('4'),
  },
  cancelBtn: {
    // backgroundColor: 'rgba(215, 48, 0, 0.1)',
    width: wp('44'),
    height: hp('5'),
  },
  cancelBtnText: {
    color: Colors.white,
  },
  loginBtn: {
    backgroundColor: Colors.themeRed,
    width: wp('44'),
    height: hp('5'),
  },
  loginBtnText: {
    color: Colors.white,
  },
});
