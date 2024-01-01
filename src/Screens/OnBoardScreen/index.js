import React, {memo, useCallback, useRef, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  PanResponder,
  Text,
} from 'react-native';
import useOnboardScreen from './useOnboardScreen';
import {styles} from './styles';
import {keyExtractor} from '../../Utils';
// import Lottie from 'lottie-react-native';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
// import * as Animatable from 'react-native-animatable';
// import ButtonWithIcon from '../../Components/ButtonWithIcon';
import {arrowRight, arrowRightIcon, onBoardOne, redArrow} from '../../Assets';
import SlideButton from 'rn-slide-button';
import {Colors} from '../../Theme/Variables';
// import Animated, {
//   useSharedValue,
//   withSpring,
//   useAnimatedStyle,
//   interpolate,
//   runOnJS,
// } from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';
import {onBoardinData} from '../../Utils/localDB';
import ThemeButton from '../../Components/ThemeButton';
import SwipeButton from 'rn-swipe-button';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';

const OnboardScreen = ({navigation}) => {
  const {
    animationValue,
    startAnimation,
    isFirst,
    startAnimationFunc,
    hideFirstView,
    getStart,
  } = useOnboardScreen(navigation);

  const AnimatedText = ({text, animation, styles, ref, isDisabled}) => (
    <Animatable.Text
      animation={animation}
      onAnimationEnd={isFirst ? hideFirstView : () => {}}
      ref={ref}
      disabled={isDisabled}
      style={styles}>
      {text}
    </Animatable.Text>
  );

  const Images = () => {
    return (
      <Image
        source={arrowRight}
        resizeMode="contain"
        style={{height: hp('2')}}
      />
    );
  };

  const arrowIcon = () => (
    <AntDesign name="arrow-right" color={'white'} size={hp('3')} />
  );

  const FirstView = () => {
    return (
      <>
        <StatusBar
          hidden={true}
          backgroundColor={'black'}
          barStyle="light-content"
        />
        <AnimatedText
          text={onBoardinData[0].heading}
          styles={{...styles.heading}}
          animation={startAnimation ? animationValue : 0}
        />
        <AnimatedText
          text={onBoardinData[0].description}
          styles={{...styles.message}}
          animation={startAnimation ? animationValue : 0}
        />
        <Animatable.View animation={startAnimation ? animationValue : 0}>
          <SwipeButton
            // thumbIconImageSource={redArrow}
            onSwipeSuccess={startAnimationFunc}
            containerStyles={{
              borderRadius: 50,
              height: hp('7.2'),
              width: wp('90'),
              alignSelf: 'center',
              paddingLeft: wp('1'),
              marginTop: hp('4'),
            }}
            thumbIconStyles={{
              height: hp('2'),
              backgroundColor: 'blue',
            }}
            thumbIconComponent={arrowIcon}
            title=""
            railBackgroundColor={'transparent'}
            railBorderColor={Colors.grayFaded}
            railFillBackgroundColor={'transparent'}
            railFillBorderColor={'transparent'}
            thumbIconBackgroundColor={Colors.themeRed}
            thumbIconBorderColor="transparent"
          />
          {/* <Animated.Text>sadsdf</Animated.Text> */}
          {/* <SlideButton
            title=""
            icon={<Images />}
            height={hp('7.2')}
            thumbStyle={{backgroundColor: Colors.themeRed}}
            containerStyle={styles.sliderView}
            borderRadius={50}
            autoResetDelay={3000}
            autoReset={false}
            reverseSlideEnabled={false}
            onReachedToEnd={startAnimationFunc}
            underlayStyle={{backgroundColor: 'transparent'}}
          /> */}
        </Animatable.View>
      </>
    );
  };

  const SecondView = () => {
    return (
      <>
        <AnimatedText
          text={onBoardinData[1].heading}
          styles={{...styles.heading}}
          animation={!isFirst ? animationValue : 0}
        />
        <AnimatedText
          text={onBoardinData[1].description}
          styles={{...styles.message}}
          animation={!isFirst ? animationValue : 0}
        />
        <Animatable.View animation={!isFirst ? animationValue : 0}>
          <ThemeButton
            title={'Start Now'}
            image={arrowRight}
            style={styles.nextButton}
            onPress={getStart}
            textStyle={{marginRight: wp('1')}}
          />
        </Animatable.View>
      </>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden={true} />
      <Image
        source={onBoardOne}
        style={{
          width: wp('100'),
          height: hp('60'),
          marginTop: hp('-2'),
        }}
        resizeMode="contain"
      />
      {isFirst ? <FirstView /> : <SecondView />}
    </ScrollView>
  );
};

export default memo(OnboardScreen);
