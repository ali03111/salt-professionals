import {View, Text, Image, FlatList} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {uploadWithText} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import usePortfolioScreen from './usePortfolioScreen';
import {styles} from './styles';
import {imageUrl} from '../../Utils/Urls';
import BlurImage from '../../Components/BlurImage';
import {TextComponent} from '../../Components/TextComponent';
import {keyExtractor} from '../../Utils';
import {CircleImage} from '../../Components/CircleImageComponent';

const PortfolioScreen = ({navigation}) => {
  const {portfolioImages, serverImages, uploadFromGalary} =
    usePortfolioScreen();
  console.log(
    'portfolioImagesportfolioImagesportfolioImagesportfolioImagesportfolioImages',
    portfolioImages,
  );
  return (
    <View style={{flex: 1, backgroundColor: Colors.themeBlack}}>
      <BackHeader
        headerTitle={'My Portfolio'}
        icon={uploadWithText}
        rightIconStyle={{width: wp('18')}}
        isBack={true}
        onRightPress={uploadFromGalary}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        numColumns={2}
        data={[...serverImages, ...portfolioImages]}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => (
          <BlurImage
            uri={item?.uri ?? imageUrl(item?.work_image)}
            styles={styles.imageView}
            isURI={true}
          />
          // <Image
          //   source={{uri: item?.uri ?? imageUrl(item?.work_image)}}
          //   progressiveRenderingEnabled
          //   style={styles.imageView}
          // />
        )}
      />
    </View>
  );
};

export default memo(PortfolioScreen);
