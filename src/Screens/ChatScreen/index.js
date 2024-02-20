import {View, Text, Platform, Image, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {Touchable} from '../../Components/Touchable';
import {arrowBack} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {CircleImage} from '../../Components/CircleImageComponent';
import {styles} from './styles';

const ChatScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.themeBlack}}>
      <View style={styles.headerView}>
        <View style={styles.HeaderLeft}>
          <Touchable onPress={() => {}} style={styles.backMain}>
            <Image
              source={arrowBack}
              style={{
                resizeMode: 'contain',
                ...styles.arrowback,
              }}
            />
          </Touchable>
        </View>
        <View style={styles.HeaderCenter}>
          <CircleImage image={null} uri={true} />
          <TextComponent text={'James Dean'} styles={{marginLeft: wp('2')}} />
        </View>
        <View style={styles.HeaderRight} />
      </View>
      <FlatList />
    </View>
  );
};

export default ChatScreen;
