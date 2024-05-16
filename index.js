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
