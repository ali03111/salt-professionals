import {Image, View} from 'react-native';
import {Touchable} from '../../Components/Touchable';
import {appleImage, facebookImage, googleImage} from '../../Assets';
import {styles} from './styles';

const SocialBottomView = ({onPress}) => {
  return (
    <View style={styles.socialView}>
      <Touchable onPress={() => onPress('Google')}>
        <Image
          source={googleImage}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </Touchable>
      <Touchable onPress={() => onPress('appleID')}>
        <Image
          source={appleImage}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </Touchable>
      <Touchable onPress={() => onPress('facebook')}>
        <Image
          source={facebookImage}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </Touchable>
    </View>
  );
};

export default SocialBottomView;
