import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import BackHeader from '../../Components/BackHeader';

const FavouriteScreen = () => {
  return (
    <View style={{flex: 1}}>
      <BackHeader headerTitle={'Favorate'} />
    </View>
  );
};

export default memo(FavouriteScreen);
