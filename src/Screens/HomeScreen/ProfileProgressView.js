import {Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {Colors} from '../../Theme/Variables';
import {styles} from './styles';
import useReduxStore from '../../Hooks/UseReduxStore';

export const ProfileProgressView = () => {
  const {getState} = useReduxStore();

  const {userData} = getState('Auth');

  console.log('lsdnfklsdnkds', userData);

  return (
    <View style={styles.profileView}>
      <View>
        <TextComponent
          styles={styles.pViewHeading}
          text={'Profile Completion'}
        />
        <TextComponent
          text={
            userData?.percentage == 100
              ? 'Your profile has been completed now you will be available in the search list of users.'
              : 'Please complete your profile to be on the search list of users.'
          }
          numberOfLines={2}
          styles={styles.pViewText}
        />
      </View>
      <ProgressCircle
        percent={userData?.percentage}
        radius={50}
        borderWidth={8}
        // containerStyle={{height: hp('10')}}
        // outerCircleStyle={{height: hp('10')}}
        color={Colors.themeRed}
        shadowColor="#fff"
        bgColor="#fff">
        <TextComponent text={userData?.percentage} styles={styles.Per} />
        <TextComponent
          text={'Complete'}
          styles={{color: 'black', fontSize: hp('1.4')}}
        />
      </ProgressCircle>
    </View>
  );
};
