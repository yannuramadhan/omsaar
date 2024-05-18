import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import store from './src/components/store.js'
import { Provider } from 'react-redux';

import { MainNavigator } from './src/navigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
          <StatusBar barStyle="default" />
          <MainNavigator />
      </Provider>
    </>
  );
};

export default App;
