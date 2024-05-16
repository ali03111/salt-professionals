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
import IconBtnView from './IconBtnView';
import {imageUrl} from '../Utils/Urls';
import {Touchable} from './Touchable';

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

export const UpComingAppView = ({item, viewStyle, index, onInfo}) => {
  const [accordionItem, setAccordionItem] = useState(false);

  const showData = Boolean(accordionItem == item?.id);

  const address = JSON.parse(item?.users?.location?.location);

  console.log(
    'accordionItemaccordionItemaccordionItemaccordionItemaccordionItemaccordionItem',
    item?.users?.location,
  );

  return (
    <View style={{...styles.comingView, ...viewStyle}}>
      <View style={styles.bottomView}>
        <MaterialCommunityIcons
          name="calendar-month-outline"
          color="white"
          size={hp('2.4')}
        />
        <TextComponent text={item?.date} fade={true} styles={styles.dateText} />
        <MaterialCommunityIcons
          name="clock-outline"
          color="white"
          size={hp('2.4')}
        />
        <TextComponent text={item?.time} fade={true} styles={styles.timeText} />
      </View>
      <View style={styles.userView}>
        <CircleImage image={imageUrl(item?.users?.image)} uri={true} />
        <View style={styles.nameView}>
          <TextComponent
            text={`${item?.users?.name}`}
            styles={{fontSize: hp('1.8'), fontWeight: 'bold'}}
          />
          <TextComponent
            text={address?.currentLocation?.description}
            fade={true}
            styles={{
              fontSize: hp('1.8'),
              width: wp('65'),
            }}
            numberOfLines={1}
          />
        </View>
        <Touchable onPress={onInfo}>
          <Image
            source={information}
            resizeMode="contain"
            style={styles.infIcon}
          />
        </Touchable>
      </View>
      <View style={styles.viewBtnView}>
        <ThemeButton
          title={'Chat'}
          style={{...styles.viewAppBtn, backgroundColor: 'red'}}
          textStyle={{fontSize: hp('1.5')}}
        />
        <ThemeButton
          onPress={() => setAccordionItem(!accordionItem)}
          title={'View Details'}
          style={styles.viewAppBtn}
          image={accordionItem ? upArrow : downArrow}
          imageStyle={styles.arrowBtn}
          textStyle={{fontSize: hp('1.5')}}
        />
      </View>
      {accordionItem ? (
        <Animatable.View animation={'fadeIn'} delay={Number('100')}>
          <IconBtnView
            title={'Braid Type'}
            rightText={item?.braid_type?.item}
            viewStyle={styles.hideView}
          />
          <IconBtnView
            title={'Braid Size'}
            rightText={item?.braid_size?.item}
            viewStyle={styles.hideView}
          />
          <IconBtnView
            title={'Braid Length'}
            rightText={item?.braid_length?.item}
            viewStyle={styles.hideView}
          />
          <IconBtnView
            title={'Location'}
            rightText={item?.users?.location?.loc_data}
            viewStyle={styles.hideView}
          />
        </Animatable.View>
      ) : (
        <View style={{paddingVertical: hp('1')}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  comingView: {
    // padding: 10,
    width: wp('90'),
    borderRadius: 6,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: Colors.themeBlack,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
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
  hideView: {
    borderWidth: 0,
    width: wp('85'),
    // marginTop: hp(''),
    backgroundColor: 'transparent',
  },
});
