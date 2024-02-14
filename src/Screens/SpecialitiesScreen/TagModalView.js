import {Image, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Theme/Variables';
import {blurImage, boldDivider, divider, profileWhite} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {data} from '.';

const TagModalView = ({activeTags, allData, isModal}) => {
  return (
    <View
      // key={userNameModal}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        isVisible={false}
        //   isVisible={userNameModal}
        // hasBackdrop={false}
        animationInTiming={100}
        animationOutTiming={100}
        avoidKeyboard
        animationType="fade"
        hideModalContentWhileAnimating
        useNativeDriver
        //   onBackButtonPress={onBackPress}
        style={styles.bottomModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Image style={styles.absolute} source={blurImage} blurRadius={30} />
          <View style={styles.modalData}>
            <Image
              source={boldDivider}
              resizeMode="contain"
              style={styles.divider}
            />
            <TextComponent
              text={'Add Specialities'}
              styles={styles.headingText}
            />
            <TextComponent
              text={'Braid Types'}
              styles={{marginVertical: hp('2')}}
            />
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', width: wp('90')}}>
              {data?.map(res => {
                return (
                  <View
                    style={{
                      paddingVertical: hp('1'),
                      paddingHorizontal: wp('3'),
                      marginVertical: hp('1'),
                      marginRight: wp('1'),
                      borderRadius: 20,
                      borderWidth: 0.5,
                      borderColor: Colors.lightBlack,
                    }}>
                    <TextComponent text={res.title} fade={true} />
                  </View>
                );
              })}
            </View>
            <ThemeButton
              title={'Save'}
              style={styles.btn}
              // onPress={onBackPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TagModalView;
