import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {memo} from 'react';
import ThemeButton from '../../Components/ThemeButton';
import {TextComponent} from '../../Components/TextComponent';
import {CircleImage} from '../../Components/CircleImageComponent';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {profleImg, textureBg} from '../../Assets';
import {imageUrl} from '../../Utils/Urls';
import {styles} from './styles';

const AppointmentDetailScreen = ({route, navigation}) => {
  const data = route.params;
  const address = JSON.parse(data?.users?.location?.location);
  return (
    <View style={styles.container}>
      <Image
        source={textureBg}
        style={{...styles.bgImg}}
        resizeMode="contain"
      />
      <View style={styles.topContainer}>
        {/* {/ <CircleImage image={data?.image} uri={true} /> /} */}
        <CircleImage
          image={imageUrl(data?.users?.image)}
          styles={styles.profileStyle}
        />
        <TextComponent
          numberOfLines={1}
          text={data?.users?.name}
          styles={styles.titleStyle}
        />
        <TextComponent
          numberOfLines={1}
          text={'Hair Braid Professional'}
          styles={styles.tagLineStyle}
          fade={true}
        />
      </View>
      <View style={styles.topTier}>
        <TextComponent
          numberOfLines={1}
          text={'Appointment Details'}
          styles={styles.leftStyle}
        />
        <TextComponent
          numberOfLines={1}
          text={'Back to Home'}
          styles={styles.tagLineStyle}
          onPress={() => navigation.navigate('MybottomTabs')}
          fade={true}
        />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardInner}>
          <TextComponent text={'Braid Type'} styles={styles.braidTitle} />
          <TextComponent
            text={data?.braid_type?.item}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Braid Size'} styles={styles.braidTitle} />
          <TextComponent
            text={data?.braid_size?.item}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Braid Lengths'} styles={styles.braidTitle} />
          <TextComponent
            text={data?.braid_length?.item}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Date & Time'} styles={styles.braidTitle} />
          <TextComponent
            text={`${data?.date} ${data?.time}`}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Location'} styles={styles.braidTitle} />
          <TextComponent
            text={'On Site'}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Address'} styles={styles.braidTitle} />
          <TextComponent
            text={`${address?.currentLocation?.description}`}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
      </View>

      <View style={styles.viewBtnView}>
        <ThemeButton
          title={'Cancel'}
          style={styles.viewAppBtn}
          // image={downArrow}
          imageStyle={{
            tintColor: 'white',
            width: wp('2.5'),
            marginLeft: wp('2'),
          }}
          textStyle={{fontSize: hp('1.5')}}
        />
        <ThemeButton
          title={'Chat'}
          style={{...styles.viewAppBtn, backgroundColor: 'red'}}
          textStyle={{fontSize: hp('1.5')}}
        />
      </View>
    </View>
  );
};

export default memo(AppointmentDetailScreen);
