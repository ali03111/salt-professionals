import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {notifyData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {NotifyComponent} from '../../Components/NotifyComponent';
import {styles} from './styles';
import BackHeader from '../../Components/BackHeader';

const NotificationScreen = () => {
  const renderItem = useCallback(({item, index}) => {
    var color =
      index.toString().length === 1 ? index : index.toString().split('').pop();
    console.log(item?.image);
    return (
      <View>
        <NotifyComponent
          image={item?.image}
          name={item?.name}
          description={item?.description}
          status={item?.initialStatus}
          // time={item?.time}
        />
      </View>
    );
  });
  return (
    <>
      <BackHeader isBack={true} headerTitle={'Notifications'} />
      <View style={styles.notifyMain}>
        <FlatList
          data={notifyData}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // paddingHorizontal: wp('4'),
            paddingBottom: hp('5'),
          }}
        />
      </View>
    </>
  );
};

export default memo(NotificationScreen);
