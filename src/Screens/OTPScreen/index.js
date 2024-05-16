import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {Colors, FontSize} from '../../Theme/Variables';
import {textureBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import useOTPScreen from './useOTPScreen';
import ThemeButton from '../../Components/ThemeButton';

const OTPScreen = ({route, navigation}) => {
  const {
    props,
    getCellOnLayoutHandler,
    value,
    setValue,
    ref,
    CELL_COUNT,
    VerifyCode,
    goBack,
    isResend,
    setIsResend,
    refTimer,
    timerCallbackFunc,
    resendOTP,
  } = useOTPScreen(navigation, route);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={Colors.themeBlack}
        barStyle={'light-content'}
      />
      <Image
        source={textureBg}
        style={{...styles.bgImg}}
        resizeMode="contain"
      />
      <TextComponent
        text={'OTP Verification'}
        styles={{
          marginTop: hp('2'),
          fontSize: hp('5'),
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      />
      <TextComponent
        text={'The enail has been send to the customer e-mail.'}
        fade={true}
        styles={{
          // marginTop: hp('2'),
          textAlign: 'center',
        }}
      />
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        disableFullscreenUI={true}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={styles.otpSendView}>
        {/* <TextComponent text={"Didn't receive OTP? "} /> */}
        <CountDownTimer
          ref={refTimer}
          timestamp={120}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            width: wp('90'),
          }}
          textStyle={styles.OtpTextStyle}
        />
        {/* {isResend && (
          <TextComponent
            text={'Resend OTP'}
            styles={{color: Colors.grayFaded}}
            onPress={resendOTP}
          />
        )} */}
      </View>
      <View style={styles.verificationBtn}>
        <ThemeButton onPress={VerifyCode} title={'Verify'} />
        {isResend && (
          <ThemeButton
            onPress={resendOTP}
            title={'Resend OTP'}
            style={{
              marginTop: hp('2'),
              backgroundColor: 'transparent',
            }}
            textStyle={{
              color: Colors.grayFaded,
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default memo(OTPScreen);
