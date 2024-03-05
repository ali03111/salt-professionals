import {Image, StyleSheet, View, FlatList} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {CircleImage} from './CircleImageComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {downArrow, information, upArrow} from '../Assets';
import ThemeButton from './ThemeButton';
import {Colors, FontSize} from '../Theme/Variables';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {MultiView} from '../Screens/SettingScreen/MultiView';

const centerView = [
  {
    title: 'Braid Type',
    rightText: 'Pony Tail',
    leftIcon: false,
  },
  {
    title: 'Braid Size',
    rightText: 'Extra Small',
    leftIcon: false,
  },
  {
    title: 'Braid Lengths',
    rightText: 'Chin Length',
    leftIcon: false,
  },
  {
    title: 'Location',
    rightText: 'House Call  ',
    leftIcon: false,
  },
];
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
            size={hp('2.4')}
          />
          <TextComponent
            text={data[0]?.date}
            fade={true}
            styles={styles.dateText}
          />
          <MaterialCommunityIcons
            name="clock-outline"
            color="white"
            size={hp('2.4')}
          />
          <TextComponent
            text={data[0]?.time}
            fade={true}
            styles={styles.timeText}
          />
        </View>
        <View style={styles.userView}>
          <CircleImage image={data[0]?.image} uri={true} />
          <View style={styles.nameView}>
            <TextComponent
              text={`${data[0]?.name}`}
              styles={{fontSize: hp('1.8'), fontWeight: 'bold'}}
            />
            <TextComponent
              text={`${data[0]?.location}`}
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
            onPress={() => setAccordionItem(item.id)}
            title={'View Details'}
            style={styles.viewAppBtn}
            image={i ? upArrow : downArrow}
            imageStyle={styles.arrowBtn}
            textStyle={{fontSize: hp('1.5')}}
          />
        </View>
        {i ? (
          <Animatable.View animation={'fadeIn'} delay={Number('100')}>
            <MultiView
              data={centerView}
              disable={true}
              // viewStyle={{marginBottom: hp('5')}}
            />
          </Animatable.View>
        ) : (
          <View
            style={{
              padding: 10,
            }}></View>
        )}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{
          alignSelf: 'center',
          marginBottom: hp('2'),
          paddingTop: hp('2'),
        }}
        data={data}
        renderItem={({item, index}) => renderHeader(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  comingView: {
    // padding: 10,
    width: wp('90'),
    borderRadius: 6,

    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 5,
    // elevation: 50,
    backgroundColor: Colors.themeBlack,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90'),
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: hp('5'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: wp('0'),
  },
  dateText: {
    fontSize: FontSize.scale12,
    marginLeft: wp('2'),
    marginRight: wp('5'),
    color: 'white',
  },
  timeText: {
    fontSize: FontSize.scale12,

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
  arrowBtn: {
    tintColor: 'white',
    width: wp('2.5'),
    marginLeft: wp('2'),
  },
});
