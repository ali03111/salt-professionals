import {memo, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
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
    <View style={{flex: 1}}>
      {/* <UpComingAppView
        viewStyle={{
          marginBottom: hp('2'),
        }}
      /> */}
      {/* <AniFlatOneByOne
        data={[
          1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]}
        InnerCompnonet={<Text>jhavdhavscjhvajhscvjahsvcjhas</Text>}
      /> */}

      <AniLeftScroll />

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
    </View>
  );
};
export default memo(UpcomingApp);
