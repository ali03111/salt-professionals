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

const NotificationComp = ({item}) => {
  return (
    <View>
      <View style={styles.mainView}>
        <CircleImage
          image={imageUrl(item?.appointments?.professional?.image)}
          isURI={true}
          styles={styles.imageView}
        />
        <View style={styles.upperMainView}>
          <View style={styles.upperView}>
            <TextComponent text={item?.title} styles={{fontWeight: '600'}} />
            <TextComponent
              text={moment(created_at).calendar()}
              styles={styles.time}
            />
          </View>
          <TextComponent text={item?.body} fade={true} styles={styles.des} />
        </View>
      </View>
      {item?.appointnement_status && (
        <View style={styles.statusView}>
          <Image
            source={checked}
            style={styles.statusImg}
            tintColor={
              item?.appointnement_status == 0
                ? Colors.fadeGreen
                : Colors.themeRed
            }
          />
          <TextComponent
            text={`Request ${
              item?.appointnement_status == 0 ? 'Rejected' : 'Accepted'
            }`}
            styles={{
              fontSize: hp('1.5'),
              color:
                item?.appointnement_status == 0
                  ? Colors.fadeGreen
                  : Colors.themeRed,
            }}
          />
        </View>
      )}
    </View>
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
    justifyContent: 'space-between',
  },
  upperView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});

export default NotificationComp;