import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {EmptyViewComp} from '../../Components/EmptyViewComp';
import {styles} from './styles';
import NotificationComp from '../../Components/NotificationComp';
import useNotificationScreen from './useNotificationScreen';
import {divider} from '../../Assets';
import {hp, wp} from '../../Config/responsive';

const NotificationScreen = ({navigation}) => {
  const {notiData, onRefresh, onAppPress} = useNotificationScreen();
  console.log('kdjvbkjsdbvksbdvkbsdklvbsdlkvsd', JSON.stringify(notiData));
  return (
    <>
      <BackHeader headerTitle={'Notifications'} />
      <View style={styles.container}>
        <AniFlatOneByOne
          data={notiData?.notifications}
          flatViewStyle={styles.upComingFlatlistView}
          flatListProps={{
            ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
            onRefresh,
            ItemSeparatorComponent: (
              <Image
                source={divider}
                resizeMode="contain"
                style={{aspectRatio: 1, width: wp('100'), height: hp('2')}}
              />
            ),
          }}
          InnerCompnonet={item => (
            <NotificationComp
              item={item}
              disabled={
                item?.appointments?.appointment_request[0]?.status == 'rejected'
                  ? true
                  : false
              }
              onStatusChange={({appId, status}) => onAppPress({appId, status})}
              onPress={() => {
                navigation.navigate(
                  'AppointmentDetailScreen',
                  item?.appointments,
                );
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default memo(NotificationScreen);
