import {Image, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Theme/Variables';
import {
  blurImage,
  boldDivider,
  divider,
  information,
  profileWhite,
  starWhite,
} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {useState} from 'react';

const EditNameModal = ({userData, userNameModal, onBackPress, saveName}) => {
  const [text, setText] = useState(userData?.name);
  const [year, setYear] = useState(userData?.experience);
  const [about, setAbout] = useState(userData?.about);

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
        avoidKeyboard={true}
        animationType="fade"
        hideModalContentWhileAnimating
        // useNativeDriver
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
            <TextComponent text={'Edit Info'} styles={styles.headingText} />
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
                value={text}
                onChangeText={t => setText(t)}
              />
            </View>
            <TextComponent
              text={'You can change your user name whenever you want.'}
              fade={true}
              styles={styles.dec}
            />
            <View style={{...styles.inputView, marginTop: hp('4')}}>
              <Image
                source={starWhite}
                resizeMode="contain"
                style={styles.icon}
              />
              <TextInput
                placeholder="Years of Experience"
                placeholderTextColor={Colors.lightBlack}
                style={{flex: 1, color: 'white'}}
                value={year}
                onChangeText={t => setYear(t)}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                ...styles.inputView,
                marginTop: hp('2'),
                height: hp('15'),
                alignItems: 'flex-start',
              }}>
              <Image
                source={information}
                resizeMode="contain"
                style={{...styles.icon, marginTop: hp('1.5')}}
              />
              <TextInput
                placeholder="Write About your self"
                placeholderTextColor={Colors.lightBlack}
                style={{flex: 1, color: 'white'}}
                value={about}
                onChangeText={t => setAbout(t)}
                multiline={true}
              />
            </View>
            <ThemeButton
              title={'Save'}
              style={styles.btn}
              onPress={() => saveName({name: text, about, experience: year})}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditNameModal;
