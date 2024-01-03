import React from 'react';
import {View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

export const HeadingView = ({
  title,
  onPress,
  viewStyle,
  childern,
  rightText,
}) => {
  return (
    <View style={{...styles.headingView, ...viewStyle}}>
      <TextComponent text={title} styles={{width: wp('70')}} />
      <TextComponent
        text={rightText ?? 'View All'}
        styles={{fontSize: hp('1.8')}}
        fade={true}
        onPress={onPress}
      />
      {childern}
    </View>
  );
};
