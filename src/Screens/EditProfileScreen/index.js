import React, {memo} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {CircleImage} from '../../Components/CircleImageComponent';
import {TextComponent} from '../../Components/TextComponent';
import {
  addIcon,
  arrowLeftOld,
  briefCase,
  circleWhite,
  location,
  locationWhite,
  medalStar,
  profileWhite,
  profleImg,
} from '../../Assets';
import useEditProfileScreen from './useEditProfileScreen';
import {ProfileProgressView} from '../HomeScreen/ProfileProgressView';
import IconBtnView from '../../Components/IconBtnView';
import {MultiView} from '../SettingScreen/MultiView';
import {styles} from './styles';
import {Touchable} from '../../Components/Touchable';

const middleView = [
  {
    title: 'Specialities',
    leftIcon: medalStar,
    rightIcon: arrowLeftOld,
  },
  {
    title: 'Portfolio',
    leftIcon: briefCase,
    rightIcon: arrowLeftOld,
  },
];

const EditProfileScreen = ({navigation}) => {
  const {userData, profileData, uploadFromGalary} = useEditProfileScreen();
  console.log('userDatauserDatauserData', userData);
  return (
    <View style={styles.mainView}>
      <BackHeader
        headerTitle={'My Profile'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={circleWhite}
          resizeMode="contain"
          style={styles.whiteCircle}>
          <CircleImage
            image={profileData?.uri ?? userData?.image}
            styles={styles.profileView}
            uri={true}
          />
          <Touchable style={styles.addIcon} onPress={uploadFromGalary}>
            <Image
              source={addIcon}
              resizeMode="contain"
              style={{height: hp('6')}}
            />
          </Touchable>
        </ImageBackground>
        <TextComponent text={userData?.name} styles={styles.name} />
        <TextComponent
          text={userData?.email}
          fade={true}
          styles={{fontSize: hp('1.5')}}
        />
        <ProfileProgressView />
        <IconBtnView
          viewStyle={{marginTop: hp('5')}}
          title={userData?.name}
          leftIcon={profileWhite}
          rightText={'Edit'}
        />
        <MultiView data={middleView} />
        <IconBtnView
          viewStyle={{marginTop: hp('3')}}
          title={'Where you willing to work'}
          leftIcon={locationWhite}
          rightText={'Select'}
        />
      </ScrollView>
    </View>
  );
};

export default memo(EditProfileScreen);
