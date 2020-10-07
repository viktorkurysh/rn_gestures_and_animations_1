import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import StyleGuide from 'src/constants/styleGuide';
import styles from './styles';

export default function ({label, primary, onPress}) {
  const color = primary ? 'white' : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  return (
    <RectButton {...{onPress}}>
      <SafeAreaView style={{backgroundColor}} accessible>
        <View style={styles.container}>
          <Text type="headline" style={[styles.label, {color}]}>
            {label}
          </Text>
        </View>
      </SafeAreaView>
    </RectButton>
  );
}
