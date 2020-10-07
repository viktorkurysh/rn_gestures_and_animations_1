import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';

export default function ({title, source, onPress, resizeMode}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={[
            styles.image,
            {
              resizeMode: resizeMode || 'contain',
            },
          ]}
          {...{source}}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
