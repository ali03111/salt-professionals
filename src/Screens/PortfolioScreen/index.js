import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {uploadWithText} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import usePortfolioScreen from './usePortfolioScreen';
import {styles} from './styles';
import {imageUrl} from '../../Utils/Urls';

const PortfolioScreen = ({navigation}) => {
  const {portfolioImages, uploadFromGalary} = usePortfolioScreen();

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
      <AniFlatOneByOne
        flatListProps={{numColumns: 2}}
        data={portfolioImages}
        InnerCompnonet={res => (
          <Image
            source={{uri: imageUrl(res?.uri) ?? res?.work_image}}
            progressiveRenderingEnabled
            style={styles.imageView}
          />
        )}
      />
    </View>
  );
};

export default memo(PortfolioScreen);
