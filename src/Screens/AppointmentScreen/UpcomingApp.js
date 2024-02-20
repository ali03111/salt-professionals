import {memo, useCallback} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
// import UpComingAppView from '../../Components/UpComingAppView';
import {UpComingAppView} from '../../Components/UpComingAppView';
import {UpcomingData} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';
import {styles} from './styles';
import {hp} from '../../Config/responsive';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import AniLeftScroll from '../../AnimatedComp/AniLeftScroll';

const UpcomingApp = () => {
  // const renderItem = useCallback(({item, index}) => {
  //   return (
  //     <UpComingAppView
  //       viewStyle={{
  //         marginBottom: hp('2'),
  //       }}
  //     />
  //   );
  // }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      {/* <AniFlatOneByOne
        data={UpcomingData}
        flatViewStyle={styles.upComingFlatlistView}
        InnerCompnonet={item => (
          )}
      /> */}
      <UpComingAppView
        viewStyle={{
          marginBottom: hp('2'),
          marginTop: hp('2'),
        }}
        data={UpcomingData}
      />
      {/* <AniLeftScroll /> */}

      {/* <FlatList
        data={UpcomingData}
        renderItem={renderItem}
        scrollEnabled
        refreshing={false}
        extraData={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.upComingFlatlistView}
      /> */}
      {/* <AppointmentReqCompSkeleton /> */}
      {/* <SkeletonPlaceholder>
      <AppointmentReqCompSkeleton />
      <AppointmentReqCompSkeleton />
      <AppointmentReqCompSkeleton />
    </SkeletonPlaceholder> */}
    </ScrollView>
  );
};
export default memo(UpcomingApp);
