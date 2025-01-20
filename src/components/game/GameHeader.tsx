import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {FONTS, formatTime, screenHeight} from '../../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

const GameHeader: FC<{
  totalCount: number;
  collectedCandies: number;
  time: number;
}> = ({totalCount, collectedCandies, time}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image
        source={require('../../assets/icons/hangrope.png')}
        style={styles.image}
      />

      <ImageBackground
        source={require('../../assets/images/lines.jpg')}
        style={styles.lines}>
        <View style={styles.subContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.candiesText}>
              🍭 {collectedCandies} /
              <Text style={styles.totalCandiesText}>{totalCount}</Text>
            </Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timerText}>
                ⌛{" "}{formatTime(time)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.15,
    width: '100%',
  },
  image: {
    width: RFValue(60),
    height: RFValue(80),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
    top: -RFValue(0),
    alignSelf: 'center',
  },
  lines: {
    padding: 5,
    borderRadius: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    margin: RFValue(10),
    marginTop: RFValue(50),
  },
  subContainer: {
    backgroundColor: '#EDC1B9',
    padding: RFValue(5),
    borderRadius: RFValue(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c2978f',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  candiesText: {
    fontSize: RFValue(14),
    fontFamily: FONTS.Lily,
    color: '#3A0E4C',
  },
  totalCandiesText: {
    fontSize: RFValue(12),
    fontFamily: FONTS.Lily,
    color: '#3A0E4C',
  },
  timeContainer: {
    alignItems: 'center',
    backgroundColor: '#c2978f',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center'
  },
  timerText: {
    fontSize: RFValue(14),
    fontFamily: FONTS.Lily,
    color: '#5B2333'
  }
});
