import React, {memo} from 'react';
import {View, Text, Image, ScrollView, Platform, StatusBar} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import {globalHeading} from '../../Config/globalStyles';
import MaskedView from '@react-native-masked-view/masked-view';
// import GradientText from '../../Components/GradientText';
// import ButtonWithIcon from '../../Components/ButtonWithIcon';
import {
  apple,
  email,
  facebook,
  google,
  lock,
  rememberImg,
  rememberEmpty,
  loginBgBlack,
  appleImage,
  googleImage,
  facebookImage,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import useLogin from './useLoginScreen';
import {Touchable} from '../../Components/Touchable';
import {hp, wp} from '../../Config/responsive';
import KeyBoardWrapper from '../../Components/KeyboardWrapper';
import {Colors} from '../../Theme/Variables';
import ThemeButton from '../../Components/ThemeButton';
import DashText from './DashText';
import SocialBottomView from './SocialBottomView';
import BottomText from './BottomText';

const LoginScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    onSocialLogin,
    setRemember,
    rememberValue,
    remember,
    onPress,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    goToForgotPassword,
    loginUserFun,
  } = useLogin(navigation);

  const isIOS = Boolean(Platform.OS == 'ios');

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.logInMain}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Image
        source={loginBgBlack}
        style={{
          width: wp('100'),
          top: hp('-10'),
        }}
      />
      <TextComponent text={'Log In'} styles={styles.topImage(isIOS)} />
      <View style={styles.inputView}>
        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Email',
            isImage: email,
            defaultValue: '',
            tintColor: Colors.themeRed,
          }}
        />
        <InputComponent
          {...{
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Password',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            inputIconStyle: styles.lockstyle,
            tintColor: Colors.themeRed,
          }}
        />
        <ThemeButton
          title={'Log In'}
          style={{marginTop: hp('3')}}
          onPress={handleSubmit(loginUserFun)}
        />
        <TextComponent
          text={'Forgot Password?'}
          fade={true}
          styles={styles.forgotText}
        />
      </View>
      <DashText text={'Log In'} />
      <SocialBottomView onSocialPress={name => onSocialLogin(name)} />
      <BottomText
        text={'Don’t have an account?'}
        ButtonText={'Sign Up'}
        onPress={() => navigation.navigate('RegisterScreen')}
        viewStyle={{marginBottom: hp('2')}}
      />
    </ScrollView>
  );
};
export default memo(LoginScreen);
