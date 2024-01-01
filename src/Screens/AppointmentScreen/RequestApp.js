import {memo, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {
  AppointmentReqComp,
  AppointmentReqCompSkeleton,
} from '../../Components/AppointmentReqComp';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {keyExtractor} from '../../Utils';
import {UpcomingData} from '../../Utils/localDB';
import {styles} from './styles';
import {hp} from '../../Config/responsive';

const RequestApp = () => {
  const renderItem = useCallback(({item, index}) => {
    return (
      <AppointmentReqComp
        viewStyle={{
          marginBottom: hp('2'),
        }}
      />
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={UpcomingData}
        renderItem={renderItem}
        scrollEnabled
        refreshing={false}
        extraData={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.upComingFlatlistView}
      />
      {/* <AppointmentReqCompSkeleton /> */}
      {/* <SkeletonPlaceholder>
        <AppointmentReqCompSkeleton />
        <AppointmentReqCompSkeleton />
        <AppointmentReqCompSkeleton />
      </SkeletonPlaceholder> */}
    </View>
  );
};
export default memo(RequestApp);
