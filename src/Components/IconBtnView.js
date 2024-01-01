import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../Theme/Variables';
import {Touchable} from './Touchable';
import {hp, wp} from '../Config/responsive';
import {arrowRightIcon, userProfileIcon} from '../Assets';
import {TextComponent} from './TextComponent';

const IconBtnView = ({
  title,
  onPress,
  leftIcon,
  viewStyle,
  textStyle,
  leftStyle,
  rightIcon,
  rightStyle,
  rightText,
}) => {
  return (
    <Touchable
      Opacity={0.7}
      onPress={onPress}
      style={{...styles.button, ...viewStyle}}>
      <Image source={leftIcon} style={{...styles.iconStyle, ...leftStyle}} />
      <TextComponent text={title} styles={{...styles.text, ...textStyle}} />
      {rightText ? (
        <TextComponent
          text={rightText}
          fade={true}
          styles={{fontSize: hp('1.5'), marginRight: wp('2')}}
        />
      ) : (
        <Image
          source={rightIcon}
          style={{...styles.arrowStyle, ...rightStyle}}
        />
      )}
    </Touchable>
  );
};

export default IconBtnView;

const styles = StyleSheet.create({
  button: {
    height: hp('6.5'),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: Colors.grayFaded,
    // marginBottom: hp('2.5'),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 50,
    width: wp('92'),
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  text: {
    fontSize: hp('2'),
    textAlign: 'left',
    marginLeft: wp('3'),
    flex: 1,
  },
  linearGradient: {
    borderRadius: 10,
  },
  iconStyle: {
    // flex: 0.08,
    width: wp('7'),
    height: hp('5'),
    resizeMode: 'contain',
    marginLeft: wp('2'),
    // backgroundColor: 'yellow',
  },
  arrowStyle: {
    flex: 0.06,
    width: wp('2'),
    height: hp('2'),
    resizeMode: 'contain',
    // backgroundColor: 'red',
    paddingRight: wp('3'),
  },
});
