import {Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {Colors} from '../../Theme/Variables';
import {styles} from './styles';

export const ProfileProgressView = () => {
  return (
    <View style={styles.profileView}>
      <View>
        <TextComponent
          styles={styles.pViewHeading}
          text={'Profile Completion'}
        />
        <TextComponent
          text={
            'Please complete your profile to be on the search list of users.'
          }
          numberOfLines={2}
          styles={styles.pViewText}
        />
      </View>
      <ProgressCircle
        percent={90}
        radius={50}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#fff"
        bgColor="#fff">
        <TextComponent text={'90'} styles={styles.Per} />
        <TextComponent
          text={'Complete'}
          styles={{color: 'black', fontSize: hp('1.4')}}
        />
      </ProgressCircle>
    </View>
  );
};
