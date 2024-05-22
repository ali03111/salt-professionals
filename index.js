/**
 * @format
 */

import {AppRegistry, Text, TextInput, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import {persistor, store} from './src/Redux/Reducer';
import 'react-native-gesture-handler';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  DehydrateOptions,
} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';
import messaging from '@react-native-firebase/messaging';

// // Register background handlere
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  // store.dispatch(setNotificationLength(remoteMessage));
  // if (navigationRef.isReady()) {
  //   // Perform navigation if the react navigation is ready to handle actions
  //   console.log('if navigationRef');
  //   navigationRef.navigate('NotificationScreen');
  // } else {
  //   console.log('else navigationRef');
  //   // You can decide what to do if react navigation is not ready
  //   // You can ignore this, or add these actions to a queue you can call later
  // }
});

const queryClient = new QueryClient();

const SaltStylelist = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
    <FlashMessage position="top" />
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => SaltStylelist);

//ADD this
if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

if (View.defaultProps == null) {
  View.defaultProps = {};
  View.defaultProps.allowFontScaling = false;
}
