import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {screenHeight} from '../../utils/Constants';
import {
  gestureHandlerRootHOC,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {getCandyImage} from '../../utils/data';
import useGameLogic from '../../customHooks/useGameLogic';

interface GameTileProps {
  data: any[][];
  setData: (data: any) => any;
  setCollectedCandies: (data: any) => any;
}

const GameTile: FC<GameTileProps> = ({data, setData, setCollectedCandies}) => {
  const {handleGesture, animatedValues} = useGameLogic(data, setData);

  return (
    <View style={styles.container}>
      {data.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row?.map((tile, colIndex) => (
            <PanGestureHandler
              key={`${rowIndex}-${colIndex}`}
              onGestureEvent={event => {
                handleGesture(
                  event,
                  rowIndex,
                  colIndex,
                  State.ACTIVE,
                  setCollectedCandies,
                );
              }}
              onHandlerStateChange={event => {
                handleGesture(
                  event,
                  rowIndex,
                  colIndex,
                  event?.nativeEvent?.state,
                  setCollectedCandies,
                );
              }}>
              <View
                style={[
                  styles.tile,
                  tile === null ? styles.emptyTile : styles.activeTile,
                ]}>
                {tile !== null && (
                  <Animated.Image
                    source={getCandyImage(tile)}
                    style={[
                      styles.candy,
                      tile === null || !animatedValues[rowIndex][colIndex]
                        ? {}
                        : {
                            transform: [
                              {
                                translateX:
                                  animatedValues[rowIndex][colIndex].x,
                              },
                              {
                                translateY:
                                  animatedValues[rowIndex][colIndex].y,
                              },
                            ],
                          },
                    ]}
                    resizeMode="contain"
                  />
                )}
              </View>
            </PanGestureHandler>
          ))}
        </View>
      ))}
    </View>
  );
};

export default gestureHandlerRootHOC(GameTile);

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.68,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  tile: {
    width: RFPercentage(5.5),
    height: RFPercentage(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'tranparent',
  },
  emptyTile: {
    backgroundColor: 'transparent',
  },
  activeTile: {
    backgroundColor: '#326E9A',
    borderWidth: 0.6,
    borderColor: '#666',
  },
  candy: {
    width: '80%',
    height: '80%',
  },
});
