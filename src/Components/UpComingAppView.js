import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {CircleImage} from './CircleImageComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  arrowLeftOld,
  arrows,
  calendarWhite,
  chatBtn,
  divider,
  downArrow,
  information,
} from '../Assets';
import ThemeButton from './ThemeButton';
import {Touchable} from './Touchable';
import {Colors} from '../Theme/Variables';
import Animatedd, {useSharedValue, withSpring} from 'react-native-reanimated';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {UpcomingData} from '../Utils/localDB';

const url =
  'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';

export const UpComingAppView = ({data, viewStyle}) => {
  const [accordionItem, setAccordionItem] = useState('');

  const renderHeader = (item, index) => {
    const i = [index].toString() == accordionItem.toString();
    return (
      <View style={{...styles.comingView, ...viewStyle}}>
        <View style={styles.bottomView}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            color="white"
            size={hp('3')}
          />
          <TextComponent
            text={data?.date}
            fade={true}
            styles={styles.dateText}
          />
          <MaterialCommunityIcons
            name="clock-outline"
            color="white"
            size={hp('3')}
          />
          <TextComponent
            text={data?.time}
            fade={true}
            styles={styles.timeText}
          />
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
        <View style={styles.viewBtnView}>
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
        </View>
      </View>
    );
  };

  const renderContent = item => {
    // console.log('check asd', item.script_media);
    return (
      <View
        style={{
          ...styles.comingView,
          borderTopWidth: 0,
          // top: hp('-10'),
        }}></View>
    );
  };

  const renderAccordion = useCallback(() => {
    return (
      <>
        <Accordion
          underlayColor={Colors.themeBlack}
          activeSections={accordionItem}
          sections={data}
          containerStyle={{backgroundColor: 'blue', alignItems: 'center'}}
          expandFromBottom={false}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(i, index) => {
            setAccordionItem(i);
            console.log('i', i);
          }}
        />
      </>
    );
  });

  return renderAccordion();
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
    height: hp('22'),
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
});
