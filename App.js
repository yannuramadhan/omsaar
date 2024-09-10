import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  NativeModules,
  Button,
  StyleSheet,
  View
} from 'react-native';
import store from './src/components/store.js';
import { Provider } from 'react-redux';
import { MainNavigator } from './src/navigation';

const App = () => {
  const { CustomModule } = NativeModules;

  const handleGetVersion = async () => {
    try {
      const version = await CustomModule.getVersionNumber();
      console.log('OceanaCustomerWebVoiceVideo Version:', version);
      alert(`OceanaCustomerWebVoiceVideo Version: ${version}`);
    } catch (error) {
      console.error('Error getting version:', error);
    }
  };


  const handleCreateWork = async () => {
    try {
      const result = await CustomModule.createWork();
      console.log(result);
      alert(result);
    } catch (error) {
      console.error('Error creating work:', error);
    }
  };



  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <View style={styles.buttonContainer}>
          <Text>From AAR :</Text>
          <Button
            onPress={handleGetVersion}
            title="Get Version Number"
          />
          <View style={styles.buttonSpacing} />
          <Button
            onPress={handleCreateWork}
            title="Create Work"
          />
          

        </View>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttonSpacing: {
    height: 16, // Adjust spacing between buttons
  },
});

export default App;
