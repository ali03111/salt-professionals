import {View, Text} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {EmptyViewComp} from '../../Components/EmptyViewComp';
import {styles} from './styles';
import NotificationComp from '../../Components/NotificationComp';
import useNotificationScreen from './useNotificationScreen';

const NotificationScreen = ({navigation}) => {
  const {notiData} = useNotificationScreen();
  console.log('kdjvbkjsdbvksbdvkbsdklvbsdlkvsd', notiData);
  return (
    <>
      <BackHeader
        isBack={true}
        headerTitle={'Notifications'}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AniFlatOneByOne
          data={notiData?.notifications}
          flatViewStyle={styles.upComingFlatlistView}
          flatListProps={{
            ListEmptyComponent: <EmptyViewComp />,
          }}
          InnerCompnonet={item => <NotificationComp item={item} />}
        />
      </View>
    </>
  );
};

export default memo(NotificationScreen);
