import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {commonStyles} from '../styles/commonStyles';
import {screenHeight, screenWidth} from '../utils/Constants';
import {useIsFocused} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSound} from '../navigations/SoundContext';
import LottieView from 'lottie-react-native';
import ScalePress from '../components/ui/ScalePress';
import {navigate} from '../utils/NavigationUtil';
import Footer from '../components/ui/Footer';

const HomeScreen: FC = () => {
  const {playSound} = useSound();

  const isFocused = useIsFocused();
  const translateY = useSharedValue(-200);

  // useEffect(() => {
  //     playSound('bg', true);
  // }, [isFocused]);

  useEffect(() => {
    translateY.value = withTiming(0, {duration: 2000});
  }, [isFocused]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <ImageBackground
      source={require('../assets/images/b2.png')}
      style={commonStyles.container}>
      <Animated.Image
        source={require('../assets/images/banner.png')}
        style={[styles.image, animatedStyles]}
      />

      <LottieView
        source={require('../assets/animations/bird.json')}
        speed={1}
        loop
        autoPlay
        hardwareAccelerationAndroid
        style={styles.lottieView}
      />

      <ScalePress
        style={styles.playButtonContainer}
        onPress={() => navigate('levelScreen')}>
        <Image
          source={require('../assets/icons/play.png')}
          style={styles.playButton}
        />
      </ScalePress>

      <Footer />
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight * 0.4,
    position: 'absolute',
    top: -20,
    resizeMode: 'contain',
  },
  lottieView: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.2,
    position: 'absolute',
    left: -10,
    top: '40%',
    transform: [{scaleX: -1}],
  },
  playButton: {
    resizeMode: 'contain',
    width: screenWidth * 0.5,
    height: screenHeight * 0.2,
  },
  playButtonContainer: {
    marginTop: screenHeight * 0.4,
  },
});
