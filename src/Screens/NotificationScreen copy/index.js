import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {Invitation} from '../../Utils/localDB';
import InvitationComp from '../../Components/NotifyComponent';
import {hp, wp} from '../../Config/responsive';

const NotificationScreen = () => {
  const renderItem = useCallback(({item, index}) => {
    var color =
      index.toString().length === 1 ? index : index.toString().split('').pop();
    return (
      <View>
        <InvitationComp
          image={item?.image}
          name={item?.name}
          description={item?.description}
          time={item?.time}
          groupName={item?.name}
          // messages={item?.messages}
          status={item?.initialStatus}
          tripId={item?.id}
          // letterStyles={styles.bg}
          // onPress={tripStatus}
          // tripOwner={item?.trip_owner}
          // index={color}
          // indexNumber={index}
        />
      </View>
    );
  });
  return (
    <View>
      <FlatList
        data={Invitation}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: wp('4'),
          paddingBottom: hp('5'),
        }}
      />
    </View>
  );
};

export default memo(NotificationScreen);
