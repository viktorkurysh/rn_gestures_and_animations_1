import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import CheckIcon from './CheckIcon';
import styles from './styles';

const Selection = ({name, onPress, isSelected}) => {
  return (
    <SafeAreaView style={styles.buttonContainer}>
      <RectButton {...{onPress}}>
        <View style={styles.button} accessible>
          <Text>{name}</Text>
          {isSelected && <CheckIcon />}
        </View>
      </RectButton>
    </SafeAreaView>
  );
};

export default Selection;
