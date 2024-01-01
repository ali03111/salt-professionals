import React from 'react';
import {View, Text, Image, Platform, Dimensions} from 'react-native';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {
  handShake,
  handShakeLottie,
  notificationWhite,
  settingWhite,
} from '../../Assets';
import {styles} from './styles';
import {Touchable} from '../../Components/Touchable';
import Lottie from 'lottie-react-native';
import {CircleImage} from '../../Components/CircleImageComponent';
import useReduxStore from '../../Hooks/UseReduxStore';
const url =
  'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';

const HomeHeader = () => {
  const {getState} = useReduxStore();

  const {userData} = getState('Auth');

  return (
    <View style={styles.headerView}>
      <View style={styles.firstView}>
        <View style={{maxWidth: wp('70')}}>
          <TextComponent
            omponent
            text={`Hello ${userData?.name}`}
            styles={styles.nameText}
            numberOfLines={1}
          />
          <TextComponent text={'Welcome to Salt!'} styles={{top: hp('1')}} />
        </View>
        <Lottie
          source={handShakeLottie}
          resizeMode="contain"
          style={{width: wp('10')}}
          loop
          autoPlay
        />
      </View>
      <CircleImage
        image={userData?.image}
        uri={true}
        styles={{
          width: Dimensions.get('window').width * 0.15,
          height: Dimensions.get('window').width * 0.15,
          // marginLeft: wp('33'),
          // top: hp('2'),
        }}
      />
    </View>
  );
};
export default HomeHeader;
