import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {CircleImage} from '../../Components/CircleImageComponent';
import {TextComponent} from '../../Components/TextComponent';
import {arrowLeftOld, arrowRightOld} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import useReduxStore from '../../Hooks/UseReduxStore';
import {imageUrl} from '../../Utils/Urls';

export const ProfileCardView = ({onpress}) => {
  const {getState} = useReduxStore();
  const {userData} = getState('Auth');
  return (
    <Touchable onPress={onpress} style={styles.mainView}>
      <View>
        <CircleImage
          image={imageUrl(userData?.image)}
          uri={true}
          styles={styles.imageView}
        />
      </View>
      <View style={styles.centerView}>
        <TextComponent
          text={userData?.name}
          numberOfLines={1}
          styles={{fontSize: hp('3'), fontWeight: 'bold'}}
        />
        <TextComponent
          text={userData?.email}
          fade={true}
          styles={{fontSize: hp('1.5')}}
        />
      </View>
      <Image
        source={arrowLeftOld}
        resizeMode="contain"
        tintColor={'white'}
        style={styles.rightIcon}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: wp('92'),
    height: hp('15'),
    borderColor: Colors.grayFaded,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    marginTop: hp('2'),
    alignItems: 'center',
    paddingHorizontal: wp('2'),
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: Colors.themeBlack,
  },
  imageView: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  centerView: {width: wp('57'), marginLeft: wp('2')},
  rightIcon: {
    width: wp('5'),
    height: hp('5'),
    marginLeft: wp('2'),
  },
});
