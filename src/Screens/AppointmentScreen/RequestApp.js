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
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import useAppointmentScreen from './useAppointmentScreen';

const RequestApp = ({navigation, route}) => {
  const {allData, onAppBook, onRefresh, dynamicNav} =
    useAppointmentScreen(navigation);

  console.log('allDataallDataallDataallDataallDataallDataallData', allData);

  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={allData?.requests}
        flatViewStyle={styles.upComingFlatlistView}
        onRefresh={onRefresh}
        InnerCompnonet={item => (
          <AppointmentReqComp
            viewStyle={{
              marginBottom: hp('2'),
            }}
            item={item}
            onPress={({appId, status}) => onAppBook({appId, status})}
            onInfo={() =>
              dynamicNav('AppointmentDetailScreen', {...item, isPending: true})
            }
          />
        )}
      />
    </View>
  );
};
export default memo(RequestApp);
