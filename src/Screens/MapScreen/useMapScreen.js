import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {getProperLocation} from '../../Utils/globalFunctions';

const useMapScreen = ({naviagte, goBack}, {params}) => {
  const {width, height} = Dimensions.get('window');
  const ACPT_RATIO = width / height;
  const latitudeDelta = Platform.OS == 'ios' ? 0.02 : 0.001;
  const laongituteDalta = latitudeDelta * ACPT_RATIO;

  const [currentLocation, setCurrentLocation] = useState({
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    description: '',
  });

  const [range, setRange] = useState({
    min: 0,
    max: 10,
  });
  const updateState = data => setRange(prev => ({...prev, ...data}));

  const {max, min} = range;

  const handleRangeChange = e => {
    updateState({max: Math.floor(e)});
    // setMin(low);
    // setMax(high);
  };

  const useEffectFucn = async () => {
    const location = await getProperLocation();
    console.log(
      'locationlocationlocationlocationlocationlocationlocation',
      location,
    );
    setCurrentLocation(location);
  };

  const onConfirm = () => {
    goBack();
    params({currentLocation, range: max});
  };

  useEffect(useEffectFucn, []);

  return {
    laongituteDalta,
    latitudeDelta,
    currentLocation,
    handleRangeChange,
    min,
    max,
    onConfirm,
  };
};

export default useMapScreen;
