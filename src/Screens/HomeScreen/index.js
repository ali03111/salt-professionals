import React, {useCallback} from 'react';
import {memo} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import HomeHeader from './homeHeader';
import {HeadingView} from './headingView';
import {UpComingAppCards} from './UpComingAppCard';
import {UpcomingData} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';
import {hp, wp} from '../../Config/responsive';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {arrowRightIcon} from '../../Assets';
import {ProfileCardComp} from '../../Components/ProfileCardComp';
import {ProfileProgressView} from './ProfileProgressView';
import {Colors} from '../../Theme/Variables';
import {AppointmentReqComp} from '../../Components/AppointmentReqComp';
import AniLeftScroll from '../../AnimatedComp/AniLeftScroll';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import useHomeScreen from './useHomeScreen';
import NoDataFoundVer from '../../Components/NoDataFoundVer';

const HomeScreen = ({navigation}) => {
  const {homeData, onAppPress, dynamicNav, onRefresh, refresh} =
    useHomeScreen(navigation);

  // console.log('homeDatahomeDatahomeDatahomeDatahomeData', homeData?.requests);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <UpComingAppCards
          data={item}
          onpress={() => dynamicNav('AppointmentDetailScreen', item)}
        />
      );
    },
    [UpcomingData],
  );
  const topRatedrenderItem = useCallback(
    ({item, index}) => {
      return (
        <AppointmentReqComp
          item={item}
          viewStyle={{
            marginRight: wp('3'),
          }}
          onPress={({appId, status}) => onAppPress({appId, status})}
          onInfo={() =>
            dynamicNav('AppointmentDetailScreen', {...item, isPending: true})
          }
        />
      );
    },
    [UpcomingData],
  );

  // console.log('homeDatahomeDatahomeDatahomeDatahomeDatahomeData', homeData);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} />
      <HomeHeader />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        contentContainerStyle={{paddingBottom: hp('5')}}
        showsVerticalScrollIndicator={false}>
        <HeadingView
          title={'Upcoming Appointments'}
          onPress={() => dynamicNav('AppointmentScreen')}
        />
        {/* <AniLeftScroll
          data={UpcomingData}
          InnerCompoenet={item => <UpComingAppCards data={item} />}
        /> */}

        <FlatList
          data={homeData?.upcoming}
          renderItem={renderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.upComingFlatlistView}
          ListEmptyComponent={
            <NoDataFoundVer
              heading={'Oops...'}
              subHeading={'no upcoming appointments !'}
              text={'Book appintments please...'}
            />
          }
        />
        <ProfileProgressView />
        <HeadingView
          title={'Request Appointments'}
          viewStyle={{marginTop: hp('6')}}
          onPress={() => dynamicNav('AppointmentScreen')}
        />
        <FlatList
          data={homeData?.requests}
          renderItem={topRatedrenderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topRatedView}
          ListEmptyComponent={
            <NoDataFoundVer
              heading={'Sorry...'}
              subHeading={'appointments requests !'}
              text={'Complete your profile to get maximum requests...'}
            />
          }
        />
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
