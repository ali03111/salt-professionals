import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
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
const url =
  'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';

const HomeHeader = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.firstView}>
        <View>
          <TextComponent
            omponent
            text={'Hello Melaa'}
            styles={styles.nameText}
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
        <CircleImage image={url} uri={true} />
        {/* <Touchable style={{marginLeft: wp('32')}}>
          <Image
            source={notificationWhite}
            resizeMode="contain"
            style={styles.notiIcon}
          />
        </Touchable>
        <Touchable style={{marginLeft: wp('4')}}>
          <Image
            source={settingWhite}
            resizeMode="contain"
            style={styles.setIcon}
          />
        </Touchable> */}
      </View>
    </View>
  );
};
export default HomeHeader;
