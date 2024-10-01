import {Image, ScrollView, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Theme/Variables';
import {blurImage, boldDivider, divider, profileWhite} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {data} from '.';
import {Touchable} from '../../Components/Touchable';
import {useState} from 'react';

const TagModalView = ({
  activeTags,
  allData,
  isModal,
  onPress,
  heading,
  onSelect,
  onBackPress,
}) => {
  function convertToTitleCase(str) {
    return str
      ?.split('_')
      ?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      ?.join(' ');
  }

  const [firstHit, setFirstHit] = useState(false);

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
        onBackButtonPress={
          firstHit && activeTags.length == 0 ? onPress : onBackPress
        }
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
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: wp('90'),
                paddingBottom: firstHit ? hp('0') : hp('5'),
              }}>
              {allData?.map(res => {
                return (
                  <Touchable
                    onPress={() => {
                      setFirstHit(true);
                      onSelect(res, heading);
                    }}
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
            </ScrollView>
            {firstHit && (
              <ThemeButton
                title={'Save'}
                style={styles.btn}
                onPress={onPress}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TagModalView;
