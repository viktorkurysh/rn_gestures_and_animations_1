import * as React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styleGuide from 'src/constants/styleGuide';

import Content from 'src/components/Content';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleGuide.palette.primary,
  },
});

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styleGuide.palette.primary}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Content"
            component={Content}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
