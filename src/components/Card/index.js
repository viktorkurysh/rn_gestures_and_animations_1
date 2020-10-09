import * as React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

import StyleGuide from 'src/constants/styleGuide';

export const cards = [
  {
    id: 0,
    source: require('rn_gestures_and_animations_1/assets/card1.png'),
  },
  {
    id: 1,
    source: require('rn_gestures_and_animations_1/assets/card2.png'),
  },
  {
    id: 2,
    source: require('rn_gestures_and_animations_1/assets/card3.png'),
  },
];

const {width} = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;
export const CARD_WIDTH = width - StyleGuide.spacing * 8;
export const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
  },
  flexibleContainer: {
    flex: 1,
    maxWidth: '100%',
    aspectRatio: CARD_ASPECT_RATIO,
    margin: StyleGuide.spacing,
    borderRadius: 18,
    resizeMode: 'contain',
  },
});

export const FlexibleCard = ({card, style}) => (
  <Animated.Image
    style={[styles.flexibleContainer, style]}
    source={card.source}
  />
);

const Card = ({card}) => {
  return <Image style={styles.container} source={card.source} />;
};

export default Card;
