import React, {useState} from 'react';
import {View} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import FastImage from 'react-native-fast-image';

const BlurImage = ({styles, uri, blurhash, radius, children, isURI}) => {
  const [load, setLoad] = useState(true);
  const imageSource = {uri, priority: FastImage.priority.high};
  // const imageSource = uri
  //   ? {uri, priority: FastImage.priority.normal}
  //   : background;
  return (
    <View
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius || 10,
      }}>
      <FastImage
        style={[styles, {zIndex: -1, position: 'relative'}]}
        source={isURI ? imageSource : uri}
        onLoad={() => setLoad(false)}
      />
      {load && (
        <Blurhash
          shouldRasterizeIOS
          blurhash={blurhash || 'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
          style={[
            styles,
            {
              zIndex: 1,
              position: 'absolute',
              overflow: 'hidden',
              borderRadius: 10,
            },
          ]}
        />
      )}
      {children}
    </View>
  );
};

export default React.memo(BlurImage);
