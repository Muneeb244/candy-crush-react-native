import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigations/Navigation';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/utils/NavigationUtil';
import {SoundProvider} from './src/navigations/SoundContext';

const App = () => {
  return (
    <SoundProvider>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </SoundProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
