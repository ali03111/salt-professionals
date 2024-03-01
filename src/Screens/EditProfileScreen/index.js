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
import EditNameModal from './EditNameModal';
import {imageUrl} from '../../Utils/Urls';
import {locationType} from '../../Utils/localDB';

const EditProfileScreen = ({navigation}) => {
  const {
    userData,
    profileData,
    uploadFromGalary,
    userNameModal,
    onBackPress,
    dynamicRoute,
    saveName,
  } = useEditProfileScreen(navigation);
  const middleView = [
    {
      title: 'Specialities',
      leftIcon: medalStar,
      rightIcon: arrowLeftOld,
      onPress: () => dynamicRoute('SpecialitiesScreen'),
    },
    {
      title: 'Portfolio',
      leftIcon: briefCase,
      rightIcon: arrowLeftOld,
      onPress: () => dynamicRoute('PortfolioScreen'),
    },
  ];

  console.log(
    locationType?.filter(res => res.locId == userData?.updated_data?.loc_data),
    userData,
  );

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
            image={profileData?.uri ?? imageUrl(userData?.image)}
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
          onPress={onBackPress}
        />
        <MultiView data={middleView} />
        <IconBtnView
          viewStyle={{marginTop: hp('3')}}
          title={'Where you willing to work'}
          leftIcon={locationWhite}
          rightText={
            locationType?.filter(
              res => res.locId == userData?.updated_data?.loc_data,
            )[0]?.label ?? 'Select'
          }
          onPress={() => dynamicRoute('LocationScreen')}
        />
        <EditNameModal
          userData={userData}
          userNameModal={userNameModal}
          onBackPress={onBackPress}
          saveName={saveName}
        />
      </ScrollView>
    </View>
  );
};

export default memo(EditProfileScreen);
