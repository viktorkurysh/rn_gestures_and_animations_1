import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Thumbnail from './Thumbnail';
import styles from './styles';

const thumbnails = [
  {
    screen: 'ClockValuesAndIdentities',
    title: 'Clock Values & Identities',
    source: require('rn_gestures_and_animations_1/assets/clock-values-and-identities.png'),
  },
];

export default function () {
  const {navigate} = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {thumbnails.map((thumbnail) => {
        return (
          <Thumbnail
            key={thumbnail.screen}
            onPress={() => navigate(thumbnail.screen)}
            {...thumbnail}
          />
        );
      })}
    </ScrollView>
  );
}
