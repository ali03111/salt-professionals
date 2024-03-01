import React from 'react';
import {memo} from 'react';
import {ScrollView, View} from 'react-native';
import {ProfileCardView} from './ProfileCardView';
import BackHeader from '../../Components/BackHeader';
import {hp} from '../../Config/responsive';
import IconBtnView from '../../Components/IconBtnView';
import {
  arrowLeftOld,
  dollarCircle,
  information,
  lockWhite,
  logOutWhite,
  receiptWhite,
  starWhite,
  termsWhite,
  trashRed,
} from '../../Assets';
import {MultiView} from './MultiView';
import useSettingScreen from './useSettingScreen';
import {AlertDesign} from '../../Components/AlertDesign';

const centerView = [
  {
    title: 'Change Password',
    leftIcon: lockWhite,
    rightText: 'Change',
    onPress: () => {},
  },
  {
    title: 'About Salt',
    leftIcon: information,
    rightIcon: arrowLeftOld,
    onPress: () => {},
  },
  {
    title: 'Privacy Policy',
    leftIcon: receiptWhite,
    rightIcon: arrowLeftOld,
    onPress: () => {},
  },
  {
    title: 'Terms and Conditions',
    leftIcon: termsWhite,
    rightIcon: arrowLeftOld,
    onPress: () => {},
  },
  {
    title: 'Rate Us',
    leftIcon: starWhite,
    rightIcon: arrowLeftOld,
    onPress: () => {},
  },
];

const bottomView = [
  {
    title: 'Log Out',
    leftIcon: logOutWhite,
    onPress: () => {},
  },
  {
    title: 'Delete Account',
    leftIcon: trashRed,
    onPress: () => {},
  },
];

const SettingScreen = ({navigation}) => {
  const {toggleAlert, onConfirm, dynamicRoute, deleteAlert, logoutAlert} =
    useSettingScreen(navigation);

  // Update onPress functions dynamically
  bottomView[0].onPress = () => toggleAlert('logoutAlert');
  bottomView[1].onPress = () => toggleAlert('deleteAlert');

  centerView[0].onPress = () => dynamicRoute('ChangePasswordScreen');

  return (
    <View>
      <BackHeader headerTitle={'Setting'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled
        contentContainerStyle={{flexGrow: 1, paddingBottom: hp('20')}}>
        <ProfileCardView
          onpress={() => navigation.navigate('EditProfileScreen')}
        />
        <IconBtnView
          viewStyle={{marginTop: hp('5')}}
          title={'Total Earnings'}
          leftIcon={dollarCircle}
          rightIcon={arrowLeftOld}
        />
        <MultiView data={centerView} />
        <MultiView data={bottomView} />
      </ScrollView>

      <AlertDesign
        isVisible={
          (deleteAlert == true && deleteAlert) ||
          (logoutAlert == true && logoutAlert)
        }
        message={
          (logoutAlert && 'Are you sure you want to logout!') ||
          (deleteAlert && 'Are you sure that you want to delete your account!')
        }
        title={'Warning'}
        onConfirm={() =>
          onConfirm(
            (logoutAlert && 'logoutAlert') || (deleteAlert && 'deleteAlert'),
          )
        }
        onCancel={() =>
          toggleAlert(
            (logoutAlert && 'logoutAlert') || (deleteAlert && 'deleteAlert'),
          )
        }
      />
    </View>
  );
};

export default memo(SettingScreen);
