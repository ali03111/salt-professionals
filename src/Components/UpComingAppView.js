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
  calendarWhite,
  chatBtn,
  divider,
  downArrow,
  information,
} from '../Assets';
import ThemeButton from './ThemeButton';
import {Touchable} from './Touchable';
import {Colors} from '../Theme/Variables';
import Accordion from 'react-native-collapsible/Accordion';
import Animatedd, {useSharedValue, withSpring} from 'react-native-reanimated';
import React, {useEffect, useRef, useState} from 'react';

const url =
  'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';

export const UpComingAppView = ({data}) => {
  //   const height = useSharedValue(22);
  //   StatusBar.setBarStyle('light-content', true);
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;
  const [viewCards, setViewCards] = useState(false);
  const {width, height} = Dimensions.get('screen');
  const cardStyles = {
    height: height / 4.5,
    width: width - 50,
    borderRadius: 14,
    position: 'absolute',
    zIndex: 100,
    left: 7,
    padding: 20,
  };
  const backCardStyle = {
    position: 'relative',
    width: width - 35,
    height: height / 4.4,
    borderRadius: 14,
    opacity: 0.3,
    zIndex: -1,
    top: 5,
  };
  React.useEffect(() => {
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  const handlePress = () => {
    console.log('kjsdbkjsbjkdbfkjsdbkfbsdjbfjksdbfjksdbfjksd', height);
    height.value = withSpring(Number(height.value) + 50);
  };

  const HeaderView = () => {
    return (
      <Animated.View style={{...styles.comingView, height: hp(height.value)}}>
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
          <ThemeButton title={'Chat'} style={styles.chatAppBtn} />
          <ThemeButton
            title={'View Details'}
            style={styles.viewAppBtn}
            image={downArrow}
            imageStyle={styles.iconStyle}
            onPress={handlePress}
          />
        </View>
      </Animated.View>
    );
  };

  const RenderContent = () => {
    return <TextComponent text={'kjsbdjkfbsdjk'} />;
  };

  return (
    // <HeaderView />
    <ScrollView style={styles.container}>
      <View
        style={{
          ...styles.subContainer,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Platform.OS == 'ios' ? 80 : 10,
          flex: 1,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
          Cards Manager
        </Text>
        {/* CARD 1 */}
        <Animated.View style={{marginTop: 25, opacity: firstOpacity}}>
          <View style={{...backCardStyle, backgroundColor: '#e3224f'}}></View>
          <View
            style={{
              ...cardStyles,
              backgroundColor: '#e3224f',
            }}>
            {/* <Cardstxt logo="blue" /> */}
          </View>
        </Animated.View>
        {/* CARD 2 */}
        <Animated.View style={{marginTop: 25, opacity: secondOpacity}}>
          <View style={{...backCardStyle, backgroundColor: '#22c3e3'}}></View>
          <View
            style={{
              ...cardStyles,
              backgroundColor: '#22c3e3',
            }}>
            {/* <Cardstxt logo="pink" /> */}
          </View>
        </Animated.View>
        {/* CARD 3 */}
        <Animated.View style={{marginTop: 25, opacity: thirdOpacity}}>
          <View style={{...backCardStyle, backgroundColor: '#e89715'}}></View>
          <View
            style={{
              ...cardStyles,
              backgroundColor: '#e89715',
            }}>
            {/* <Cardstxt logo="blue" /> */}
          </View>
        </Animated.View>
      </View>
    </ScrollView>
    // <Accordion
    //   //   activeSections={[0]}
    //   sections={['Section 1', 'Section 2', 'Section 3']}
    //   // renderSectionTitle={this._renderSectionTitle}
    //   renderHeader={HeaderView}
    //   renderContent={RenderContent}
    //   onChange={updateSections => {}}
    // />
    // <View style={styles.container}>
    //   <Animated.View style={{...styles.box, height}} />
    //   <Button onPress={handlePress} title="Click me" />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewbtn: {
    height: 40,
    width: 150,
    backgroundColor: '#e3224f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingView: {
    width: wp('90'),
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // marginLeft: hp('1.5'),
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 50,
    height: hp('22'),
    marginBottom: hp('2'),
    paddingBottom: hp('2'),
    // backgroundColor: 'white',
  },
  upperView: {flexDirection: 'row', alignItems: 'center'},
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5'),
    marginLeft: wp('1.5'),
  },
  locationIcon: {width: wp('75'), fontSize: hp('1.7'), marginLeft: wp('1')},
  divider: {width: wp('70'), marginTop: hp('1'), marginLeft: wp('1')},
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
  infIcon: {
    width: wp('6'),
    height: hp('5'),
    marginLeft: wp('1'),
  },
  viewBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('4'),
    alignItems: 'center',
    width: wp('85'),
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  viewAppBtn: {
    backgroundColor: Colors.lightBlack,
    width: wp('40'),
    height: hp('5'),
  },
  chatAppBtn: {
    width: wp('40'),
    height: hp('5'),
  },
  nameView: {marginLeft: wp('2'), justifyContent: 'space-between'},
  iconStyle: {
    width: wp('3'),
    height: hp('3'),
    marginLeft: hp('1'),
  },
});
