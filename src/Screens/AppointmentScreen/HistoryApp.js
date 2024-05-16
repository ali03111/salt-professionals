import {memo} from 'react';
import {View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {UpcomingData} from '../../Utils/localDB';
import {styles} from './styles';
import {HistoryReqComp} from '../../Components/HistoryReqComp';
import {hp} from '../../Config/responsive';
import {EmptyViewComp} from '../../Components/EmptyViewComp';
import useAppointmentScreen from './useAppointmentScreen';

const HistoryApp = ({navigation}) => {
  const {allData, onAppBook, onRefresh, dynamicNav} =
    useAppointmentScreen(navigation);
  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={allData?.history}
        flatViewStyle={styles.upComingFlatlistView}
        flatListProps={{
          ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
        }}
        InnerCompnonet={item => (
          <HistoryReqComp
            viewStyle={{
              marginBottom: hp('2'),
            }}
            data={item}
            onInfo={() => dynamicNav('AppointmentDetailScreen', {...item})}
          />
        )}
      />

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
export default memo(HistoryApp);
