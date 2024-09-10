import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ClickToCallScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://clicktocall.whnmandiri.co.id/?call=120&delay=1000&server=sbc.webrtc.biz.id' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ClickToCallScreen;
