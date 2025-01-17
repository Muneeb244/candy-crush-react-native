import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigations/Navigation'
import SplashScreen from './src/screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
})