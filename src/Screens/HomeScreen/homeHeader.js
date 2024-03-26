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
import {imageUrl} from '../../Utils/Urls';
const url =
  'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';

const HomeHeader = () => {
  const {getState} = useReduxStore();

  const {userData} = getState('Auth');
  let firstName = userData?.name?.split(' ')[0];

  return (
    <View style={styles.headerView}>
      <View style={styles.firstView}>
        <View style={{maxWidth: wp('70')}}>
          <TextComponent
            omponent
            text={`Hello ${firstName}`}
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
      <View style={{marginTop: hp('3')}}>
        <CircleImage
          image={imageUrl(userData?.image)}
          uri={true}
          styles={{
            width: Dimensions.get('window').width * 0.15,
            height: Dimensions.get('window').width * 0.15,
            // marginLeft: wp('33'),
            // marginTop: hp('2'),
          }}
        />
      </View>
    </View>
  );
};
export default HomeHeader;
