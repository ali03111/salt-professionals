import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {Colors} from '../../Theme/Variables';
import BackHeader from '../../Components/BackHeader';
import MapView, {Marker, Polyline} from 'react-native-maps';
import useMapScreen from './useMapScreen';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {locationWhite} from '../../Assets';
import Slider from '@react-native-community/slider';
import ThemeButton from '../../Components/ThemeButton';

const MapScreen = ({navigation, route}) => {
  const {
    laongituteDalta,
    latitudeDelta,
    currentLocation,
    max,
    min,
    handleRangeChange,
    onConfirm,
  } = useMapScreen(navigation, route);

  return (
    <View style={styles.mainView}>
      <BackHeader
        headerTitle={'Map'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.modalView}>
        <TextComponent text={'Select Location'} />
        <View style={styles.decView}>
          <Image
            source={locationWhite}
            resizeMode="contain"
            style={styles.locIcon}
          />
          <TextComponent
            text={'Street338 Catherine St, V9A 3S8, Columbia.'}
            numberOfLines={1}
            styles={{width: wp('80')}}
          />
        </View>
        <TextComponent
          text={'Location Range'}
          styles={{
            marginTop: hp('2'),
          }}
        />
        <Slider
          style={styles.rangeSld}
          minimumValue={10}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor={Colors.grayFaded}
          onValueChange={e => handleRangeChange(e)}
          thumbTintColor={Colors.themeRed}
        />
        <View style={styles.rangeView}>
          <TextComponent text={min + ' km'} styles={styles.kmText} />
          <TextComponent text={max + ' km'} styles={styles.kmText} />
        </View>
        {max > 0 && (
          <ThemeButton
            title={'Confirm'}
            style={styles.btn}
            onPress={onConfirm}
          />
        )}
      </View>
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.staticMapImg}
        followsUserLocation={true}
        showsUserLocation={true}
        zoomEnabled={true}
        focusable={true}
        moveOnMarkerPress
        zoomTapEnabled
        showsMyLocationButton
        region={{
          latitude: currentLocation?.coords?.latitude,
          longitude: currentLocation?.coords?.longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: laongituteDalta,
        }}
        rotateEnabled={true}></MapView>
    </View>
  );
};

export default memo(MapScreen);
