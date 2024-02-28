import {Image, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Theme/Variables';
import {blurImage, boldDivider, divider, profileWhite} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {data} from '.';
import {Touchable} from '../../Components/Touchable';

const TagModalView = ({
  activeTags,
  allData,
  isModal,
  onPress,
  heading,
  onSelect,
}) => {
  function convertToTitleCase(str) {
    return str
      ?.split('_')
      ?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      ?.join(' ');
  }

  return (
    <View
      // key={userNameModal}
      style={styles.modalView}>
      <Modal
        isVisible={isModal}
        animationInTiming={100}
        animationOutTiming={100}
        avoidKeyboard
        animationType="fade"
        hideModalContentWhileAnimating
        useNativeDriver
        onBackButtonPress={onPress}
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
              text={convertToTitleCase(heading)}
              styles={{marginVertical: hp('2')}}
            />
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', width: wp('90')}}>
              {allData?.map(res => {
                return (
                  <Touchable
                    onPress={() => onSelect(res, heading)}
                    style={styles.innerTextView(
                      Boolean(activeTags.find(v => v.id == res.id)),
                    )}>
                    <TextComponent
                      styles={styles.innerText(
                        Boolean(activeTags.find(v => v.id == res.id)),
                      )}
                      text={res?.item}
                      fade={true}
                    />
                  </Touchable>
                );
              })}
            </View>
            <ThemeButton title={'Save'} style={styles.btn} onPress={onPress} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TagModalView;
