import React, {useCallback} from 'react';
import {memo} from 'react';
import {FlatList, ScrollView, StatusBar, Text, View} from 'react-native';
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

const HomeScreen = ({navigation}) => {
  const {homeData} = useHomeScreen(navigation);

  // console.log('homeDatahomeDatahomeDatahomeDatahomeData', homeData?.requests);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <UpComingAppCards
          data={item}
          onpress={() => navigation.navigate('AppointmentDetailScreen', item)}
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
        />
      );
    },
    [UpcomingData],
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} />
      <HomeHeader />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp('5')}}
        showsVerticalScrollIndicator={false}>
        <HeadingView title={'Upcoming Appointments'} />
        {/* <AniLeftScroll
          data={UpcomingData}
          InnerCompoenet={item => <UpComingAppCards data={item} />}
        /> */}

        <FlatList
          data={homeData?.requests}
          renderItem={renderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.upComingFlatlistView}
        />
        <ProfileProgressView />
        <HeadingView
          title={'Top-rated professionals '}
          viewStyle={{marginTop: hp('6')}}
        />
        <FlatList
          data={UpcomingData}
          renderItem={topRatedrenderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topRatedView}
        />
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
