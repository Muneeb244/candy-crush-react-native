import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenHeight} from '../../utils/Constants';
import ScalePress from '../ui/ScalePress';
import { goBack } from '../../utils/NavigationUtil';

const GameFooter = () => {
  return (
    <View style={styles.container}>
      <ScalePress onPress={() => goBack()}>
        <Image
          source={require('../../assets/icons/close.png')}
          style={styles.closeIcon}
        />
      </ScalePress>
    </View>
  );
};

export default GameFooter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.1,
    paddingHorizontal: 10,
  },
  closeIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});
