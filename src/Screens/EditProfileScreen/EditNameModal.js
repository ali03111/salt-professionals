import {Image, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Theme/Variables';
import {blurImage, boldDivider, divider, profileWhite} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';

const EditNameModal = ({userData, userNameModal, onBackPress}) => {
  return (
    <View
      key={userNameModal}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        // isVisible={true}
        isVisible={userNameModal}
        // hasBackdrop={false}
        animationInTiming={100}
        animationOutTiming={100}
        avoidKeyboard
        animationType="fade"
        hideModalContentWhileAnimating
        useNativeDriver
        onBackButtonPress={onBackPress}
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
            <TextComponent text={'Edit Name'} styles={styles.headingText} />
            <View style={styles.inputView}>
              <Image
                source={profileWhite}
                resizeMode="contain"
                style={styles.icon}
              />
              <TextInput
                placeholder="Please Enter Your Name"
                placeholderTextColor={Colors.lightBlack}
                style={{flex: 1, color: 'white'}}
                defaultValue={userData?.name}
              />
            </View>
            <TextComponent
              text={'You can change your user name whenever you want.'}
              fade={true}
              styles={styles.dec}
            />
            <ThemeButton
              title={'Save'}
              style={styles.btn}
              onPress={onBackPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditNameModal;
