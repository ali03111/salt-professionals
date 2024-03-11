import {memo} from 'react';
import {View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {UpcomingData} from '../../Utils/localDB';
import {styles} from './styles';
import {HistoryReqComp} from '../../Components/HistoryReqComp';
import {hp} from '../../Config/responsive';

const HistoryApp = () => {
  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={[]}
        flatViewStyle={styles.upComingFlatlistView}
        InnerCompnonet={item => (
          <HistoryReqComp
            viewStyle={{
              marginBottom: hp('2'),
            }}
            data={item}
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
