import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }
  

  state = {
    isLoadingComplete: false,
  };
  
  

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={true}/>}
          <AppNavigator />
        </View>
      );
    }
  }



  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        /*require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),*/
      ]),
      Font.loadAsync({        
        'Raleway-regular-webfont': require('./assets/fonts/Raleway-Regular.ttf'),
        'Raleway-Black': require('./assets/fonts/Raleway-ExtraBold.ttf'),
        'MontserratAlternates': require('./assets/fonts/MontserratAlternates-Light.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-regular-webfont': require('./assets/fonts/Lato-Regular.ttf'),
        'Roboto': require("native-base/Fonts/Roboto.ttf"),
        'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
        'Ionicons': require("native-base/Fonts/Ionicons.ttf"),                
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


