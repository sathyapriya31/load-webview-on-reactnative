'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  WebView,
  Text,
  Image,
  AppRegistry
} = React;
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'http://docs.google.com/gview?embedded=true&url=http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';
//var DEFAULT_URL = 'https://player.vimeo.com/video/159542449?title=0&byline=0&badge=0&portrait=0&autoplay=1';

var WebViewExample = React.createClass({

getInitialState: function() {
    return {
      url: DEFAULT_URL,
      status: 'No Page Loaded',
      loading: true,
      scalesPageToFit: true,
    };
  },
  render: function() { 
  console.log(this.state.url);
  var self=this;
  return (
    <View style={[styles.container]}>    
      <Image style={styles.bg} source={require('./Image/beerback.jpg')} />
      <View style={styles.topBar}>
        <View style={styles.topBarView}>
          <View style={{flex:0.1, paddingLeft: 5}}>             
            <Image style={{width: 40}} size={30} source={require('./Image/menu-icon.png')}></Image>
          </View>
          <View style={{flex:0.2}}>
            <Text style={styles.topBarText}>WebView</Text>
          </View>
        </View>
      </View>
      <View style={{flex:1}}>
        <WebView
        ref={WEBVIEW_REF}
        automaticallyAdjustContentInsets={false}
        source={{uri: this.state.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    </View>
    );
},
});
var styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
  },
  topBar: {
      padding:5,
      backgroundColor: '#237cc5'
  },
  topBarView: {
      flex:1, 
      flexDirection: "row", 
      justifyContent: "center", 
      alignItems: "center"
  },
    topBarText: {
      color: "white", 
      fontSize: 18, 
      fontWeight: "bold",
      alignItems:'center'
  },
});


AppRegistry.registerComponent('WebViewExample', () => WebViewExample);
