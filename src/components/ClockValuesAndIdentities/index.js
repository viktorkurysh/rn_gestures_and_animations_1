import React, {useState} from 'react';
import {View} from 'react-native';
import Animated, {
  add,
  cond,
  eq,
  Extrapolate,
  interpolate,
  not,
  set,
  startClock,
  useCode,
} from 'react-native-reanimated';
import {useClock, useValues} from 'react-native-redash/lib/module/v1';

import Card, {cards} from 'src/components/Card';
import Button from 'src/components/Button';
import styles from './styles';

const duration = 1500;

function runAnimation(startAnimation, clock, from, to, startTime, opacity) {
  return [
    startClock(clock),
    cond(eq(startAnimation, 1), [
      set(from, opacity),
      set(to, not(to)),
      set(startTime, clock),
      set(startAnimation, 0),
    ]),
  ];
}

function useAnimation(show) {
  const clock = useClock();
  const [startTime, from, to, startAnimation] = useValues(0, 0, 0, 0);
  const endTime = add(startTime, duration);
  const opacity = interpolate(clock, {
    inputRange: [startTime, endTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(() => set(startAnimation, 1), [show]);
  useCode(
    () => runAnimation(startAnimation, clock, from, to, startTime, opacity),
    [startAnimation, startTime, clock, from, to, opacity],
  );

  return {opacity};
}

export default function () {
  const [show, setShow] = useState(true);
  const {opacity} = useAnimation(show);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{opacity}}>
          <Card card={cards[0]} />
        </Animated.View>
      </View>
      <Button
        label={show ? 'Hide' : 'Show'}
        primary
        onPress={() => setShow((prev) => !prev)}
      />
    </View>
  );
}
