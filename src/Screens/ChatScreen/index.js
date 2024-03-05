import {View, Text, Platform, Image, FlatList, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {Touchable} from '../../Components/Touchable';
import {arrowBack} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {CircleImage} from '../../Components/CircleImageComponent';
import {styles} from './styles';
import {Chat, msgs} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';

const ChatScreen = () => {
  const renderItem = ({item, index}) => {
    const isSender = Boolean(item.user == 'sender');
    return !isSender ? (
      <View style={styles.senderView(isSender)}>
        <View style={styles.senderText(isSender)}>
          <TextComponent text={item?.msg} styles={{fontWeight: '300'}} />
        </View>
        <TextComponent
          text={'3:15 PM'}
          fade={true}
          styles={{fontSize: hp('1.5'), marginLeft: wp('2')}}
        />
      </View>
    ) : (
      <View
        style={{...styles.senderView(isSender), justifyContent: 'flex-end'}}>
        <TextComponent
          text={'3:15 PM'}
          fade={true}
          styles={{fontSize: hp('1.5'), marginRight: wp('2')}}
        />
        <View style={styles.senderText(isSender)}>
          <TextComponent text={item?.msg} styles={{fontWeight: '300'}} />
        </View>
      </View>
    );
  };

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
      <FlatList
        data={msgs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <View style={styles.searchMain}>
        <TextInput
          enablesReturnKeyAutomatically
          style={styles.searchinput}
          // onChangeText={onChangeText}
          // value={text}
          placeholder={'Type a message'}
          placeholderTextColor={Colors.gray}
          multiline
          // numberOfLines={5}
        />
      </View>
    </View>
  );
};

export default ChatScreen;
