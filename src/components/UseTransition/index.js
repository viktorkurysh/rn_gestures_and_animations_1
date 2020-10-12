import React from 'react';
import {View} from 'react-native';
import Animated, {Easing, multiply, interpolate} from 'react-native-reanimated';
import {
  useTimingTransition,
  mix,
  transformOrigin,
} from 'react-native-redash/lib/module/v1';
import Analytics from 'appcenter-analytics';
import Card, {cards, CARD_WIDTH} from 'src/components/Card';
import Button from 'src/components/Button';
import styles from './styles';

const UseTransition = () => {
  const [toggled, setToggled] = React.useState(false);
  const transition = useTimingTransition(toggled, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  });

  React.useEffect(() => {
    Analytics.trackEvent('My custom event');
  }, []);

  return (
    <View style={styles.container}>
      {cards.map((card, index) => {
        const direction = interpolate(index, {
          inputRange: [0, 1, 2],
          outputRange: [-1, 0, 1],
        });

        const rotate = multiply(direction, mix(transition, 0, Math.PI / 6));

        return (
          <Animated.View
            key={card.id}
            style={[
              styles.overlay,
              {
                transform: transformOrigin(
                  {x: -CARD_WIDTH / 2, y: 0},
                  {rotate},
                ),
              },
            ]}>
            <Card {...{card}} />
          </Animated.View>
        );
      })}
      <Button
        label={toggled ? 'Reset' : 'Start'}
        primary
        onPress={() => setToggled(toggled ^ 1)}
      />
    </View>
  );
};

export default UseTransition;
