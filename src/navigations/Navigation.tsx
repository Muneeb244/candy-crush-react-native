import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import LevelScreen from '../screens/LevelScreen';
import SplashScreen from '../screens/SplashScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="splashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        name="homeScreen"
        options={{
          animation: 'fade',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="levelScreen"
        options={{
          animation: 'fade',
        }}
        component={LevelScreen} />
      <Stack.Screen
        name="gameScreen"
        options={{
          animation: 'fade',
        }}
        component={GameScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
