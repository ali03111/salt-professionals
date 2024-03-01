import {View, Text, FlatList, Image} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {Colors} from '../../Theme/Variables';
import {locationType} from '../../Utils/localDB';
import RadioGroup, {RadioButton} from 'react-native-radio-buttons-group';
import {divider} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import useLocationScreen from './useLocationScreen';
import ThemeButton from '../../Components/ThemeButton';

const LocationScreen = ({navigation}) => {
  const {selectedVal, onSelected, onSave, userData} =
    useLocationScreen(navigation);

  const renderItem = ({item, index}) => {
    return (
      <RadioButton
        label={item.label}
        labelStyle={{color: 'white'}}
        selected={Boolean(item.locId == selectedVal)}
        color={Colors.themeRed}
        borderColor={Colors.gray}
        size={hp('4')}
        onPress={() => onSelected(item?.locId)}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.themeBlack}}>
      <BackHeader
        headerTitle={'Location'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />

      <FlatList
        data={locationType}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListView}
        ItemSeparatorComponent={
          <Image source={divider} resizeMode="contain" style={styles.divider} />
        }
      />

      <ThemeButton
        title={'Save Location'}
        onPress={() => onSave[selectedVal]()}
        style={styles.btn}
      />
    </View>
  );
};

export default memo(LocationScreen);
