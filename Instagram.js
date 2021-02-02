import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Instagram extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://www.Instagram.com/'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}