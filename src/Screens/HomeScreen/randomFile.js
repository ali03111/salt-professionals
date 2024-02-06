import {View, Text} from 'react-native';
import React from 'react';
import {successMessage} from '../../Config/NotificationMessage';

export default function randomFile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => successMessage('jbdkjsbdjk')}>randomFile</Text>
    </View>
  );
}
