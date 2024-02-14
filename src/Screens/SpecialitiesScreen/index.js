import React, {memo} from 'react';
import {Image, ScrollView, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {Colors} from '../../Theme/Variables';
import {HeadingView} from '../HomeScreen/headingView';
import {plusCircle} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import TagModalView from './TagModalView';
import useSpecialitiesScreen from './userSpecialitiesScreen';
import {braidType} from '../../Utils/localDB';

export const data = [
  {
    id: 1,
    title: 'sdf',
  },
  {
    id: 1,
    title: 'sdfsdsd',
  },
  {
    id: 1,
    title: 's ddddf',
  },
  {
    id: 1,
    title: 'sd  d df',
  },
  {
    id: 1,
    title: 'dddsdf',
  },
  {
    id: 1,
    title: 'sderef',
  },
  {
    id: 1,
    title: 's3wewdf',
  },
  {
    id: 1,
    title: 'sdfeee',
  },
  {
    id: 1,
    title: 'sdwewewef',
  },
  {
    id: 1,
    title: 'sdssf',
  },
  {
    id: 1,
    title: 'sssdf',
  },
  {
    id: 1,
    title: 'ssdsddf',
  },
  {
    id: 1,
    title: 'sdsdsf',
  },
];

const SpecialitiesScreen = ({navigation}) => {
  const {activeTags, addTags, toggleModal, onOpenModal} =
    useSpecialitiesScreen(navigation);
  const ArryView = ({item}) => {
    return (
      <View style={styles.arryView}>
        {item.length > 0 ? (
          item.map(res => {
            return (
              <View style={styles.textView}>
                <TextComponent fade={true} text={res?.title} />
              </View>
            );
          })
        ) : (
          <View></View>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.themeBlack}}>
      <BackHeader
        headerTitle={'Specialities'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Colors.themeBlack,
          paddingBottom: hp('10'),
        }}>
        <HeadingView
          title={'Braid Types'}
          rightText={'Add more'}
          onPress={() => onOpenModal(braidType)}
          childern={
            <Image
              source={plusCircle}
              resizeMode="contain"
              style={{width: wp('5'), height: hp('5')}}
            />
          }
        />
        <ArryView item={data} />
        <HeadingView
          title={'Braid Size'}
          rightText={'Add more'}
          childern={
            <Image
              source={plusCircle}
              resizeMode="contain"
              style={{width: wp('5'), height: hp('5')}}
            />
          }
        />
        <ArryView item={data} />
        <HeadingView
          title={'Braid Lengths'}
          rightText={'Add more'}
          childern={
            <Image
              source={plusCircle}
              resizeMode="contain"
              style={{width: wp('5'), height: hp('5')}}
            />
          }
        />
        <ArryView item={data} />
      </ScrollView>
      {/* <TagModalView activeTags={activeTags} allData={braidType} /> */}
    </View>
  );
};

export default memo(SpecialitiesScreen);
