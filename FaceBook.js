import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class FaceBook extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://www.facebook.com/'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}