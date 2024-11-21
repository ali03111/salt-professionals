import {Image, ScrollView, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Theme/Variables';
import {
  activeRadioBtn,
  blurImage,
  boldDivider,
  divider,
  profileWhite,
  radioBtn,
} from '../../Assets';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {data} from '.';
import {Touchable} from '../../Components/Touchable';
import {useState} from 'react';
import {Divider} from 'react-native-paper';

const TagModalView = ({
  activeTags,
  allData,
  isModal,
  onPress,
  heading,
  onSelect,
  onBackPress,
  activeTitle,
}) => {
  function convertToTitleCase(str) {
    return str
      ?.split('_')
      ?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      ?.join(' ');
  }

  const title = {
    braid_type: 'Select type',
    braid_length: 'Select length',
    braid_size: 'Select Size',
    estimateTime: 'Estimated time',
    estimatePrice: 'Estimated price',
  };

  const [firstHit, setFirstHit] = useState(false);

  const MultiSelectView = () => {
    return allData?.map(res => {
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
    });
  };

  const SignleSelectView = () => {
    return allData.map(res => {
      return (
        <Touchable onPress={() => onSelect(res, heading)}>
          <View style={styles.typeView}>
            <Image
              source={activeTags?.id == res?.id ? activeRadioBtn : radioBtn}
              resizeMode="contain"
              style={styles.radioImg}
            />
            <TextComponent text={res?.title || res?.name || res?.item} />
          </View>
          <Divider style={styles.typeDivider} />
        </Touchable>
      );
    });
  };

  const EstimateTimeView = () => {
    return (
      <View
        style={{
          width: wp('90'),
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp('2'),
        }}>
        <View
          style={{
            width: wp('37'),
            height: hp('15'),
            borderRadius: 10,
            borderColor: Colors.lightBlack,
            borderWidth: 0.5,
          }}>
          {/* <TextInput  /> */}
        </View>
        <TextComponent
          text={'-'}
          styles={{fontSize: hp('4'), fontWeight: 'bold'}}
        />
        <View
          style={{
            width: wp('37'),
            height: hp('15'),
            borderRadius: 10,
            borderColor: Colors.lightBlack,
            borderWidth: 0.5,
          }}></View>
      </View>
    );
  };

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
            <TextComponent text={title[heading]} styles={styles.headingText} />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalScroll}>
              {Boolean(
                heading == 'braid_size' || heading == 'braid_length',
              ) && <MultiSelectView />}
              {Boolean(heading == 'braid_type') && <SignleSelectView />}
              {Boolean(heading == 'estimatePrice') && <EstimateTimeView />}
            </ScrollView>
            {/* {firstHit && ( */}
            <ThemeButton title={'Save'} style={styles.btn} onPress={onPress} />
            {/* )} */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TagModalView;
