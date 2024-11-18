import {memo} from 'react';
import {Image, ScrollView, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {
  addIcon,
  arrowRight,
  arrowRightIcon,
  plusCircle,
  rightArrowFill,
} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import {HeadingView} from '../HomeScreen/headingView';
import ThemeButton from '../../Components/ThemeButton';
import TagModalView from '../SpecialitiesScreen/TagModalView';
import useBriadTypeScreen from './useBriadTypeScreen';

const BriadTypeScreen = ({navigation}) => {
  const {
    activeTags,
    addTags,
    allData,
    modalVal,
    setModalVal,
    onPressKey,
    onOpenModal,
    toggleModal,
  } = useBriadTypeScreen(navigation);

  const TextIconView = ({title, placeholder, value, onPress}) => {
    return (
      <Touchable style={styles.touchView}>
        <TextComponent text={title} styles={{fontSize: hp('1.8')}} fade />
        <View style={styles.innerView}>
          <TextComponent
            text={value ?? placeholder}
            styles={{fontSize: hp('1.8')}}
            fade={!Boolean(value)}
          />
          <Image
            source={arrowRight}
            resizeMode="contain"
            style={{width: wp('5')}}
          />
        </View>
      </Touchable>
    );
  };

  const ArryView = ({item, onPress}) => {
    const arry = Boolean(item.length > 0);
    return (
      <View
        style={{
          ...styles.arryView,
          justifyContent: arry ? 'flex-start' : 'flex-end',
        }}>
        {arry ? (
          item.map(res => {
            return (
              <View style={styles.textView}>
                <TextComponent fade={true} text={res?.item} />
              </View>
            );
          })
        ) : (
          <ThemeButton
            title={'Add Sizes'}
            style={styles.addView}
            image={plusCircle}
            imageStyle={{marginLeft: wp('1')}}
            onPress={onPress}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <BackHeader
        headerTitle={'Braid Types'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextComponent text={'Select Braid Types'} styles={styles.heading} />
        <TextComponent
          text={'If you suspect that your braid has take the grand.'}
          styles={styles.subText}
          fade
        />
        <TextIconView
          title={'Select braid type'}
          placeholder={'Choose your type'}
          value={null}
        />
        <TextComponent
          text={'Select braid sizes'}
          styles={styles.headingText}
          fade
        />
        <ArryView item={[]} onPress={() => onOpenModal('braid_size')} />
        <TextComponent
          text={'Select braid lengths'}
          styles={styles.headingText}
          fade
        />
        <ArryView item={[]} onPress={() => onOpenModal('braid_size')} />
        {modalVal && (
          <TagModalView
            activeTags={activeTags[onPressKey] ?? []}
            allData={allData != undefined ? allData[onPressKey] : []}
            heading={onPressKey}
            isModal={modalVal}
            onSelect={addTags}
            onPress={toggleModal}
            onBackPress={() => setModalVal(false)}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default memo(BriadTypeScreen);
