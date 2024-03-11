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
import useAppointmentScreen from './useAppointmentScreen';

const UpcomingApp = ({navigation}) => {
  const {allData, onAppBook, onRefresh, dynamicNav} =
    useAppointmentScreen(navigation);

  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={allData?.upcoming}
        flatViewStyle={styles.upComingFlatlistView}
        onRefresh={onRefresh}
        InnerCompnonet={(item, index) => (
          <UpComingAppView
            viewStyle={{
              marginBottom: hp('2'),
            }}
            item={item}
            index={index}
            onInfo={() => dynamicNav('AppointmentDetailScreen', item)}
          />
        )}
      />
    </View>
  );
};
export default memo(UpcomingApp);
