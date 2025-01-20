import {useRef} from 'react';
import {Animated} from 'react-native';

const useGameLogic = (data: any[][], setData: (data: any) => any) => {
  const animatedValues = useRef(
    data?.map(row =>
      row.map(tile =>
        tile === null
          ? null
          : {x: new Animated.Value(0), y: new Animated.Value(0)},
      ),
    ),
  ).current;

  const handleGesture = async (
    event: any,
    rowIndex: number,
    collIndex: number,
    state: any,
    setCollectedCandies: any,
  ) => {};

  return {
    handleGesture,
    animatedValues,
  };
};

export default useGameLogic;
