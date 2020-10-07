import * as React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import styleGuide from 'src/constants/styleGuide';

import Content from 'src/components/Content';
import ClockValuesAndIdentities from 'src/components/ClockValuesAndIdentities';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleGuide.palette.primary,
  },
  header: {
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
        <Stack.Navigator
          initialRouteName="Content"
          screenOptions={{
            gestureEnabled: true,
            cardStyle: {backgroundColor: '#FFF'},
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen
            name="Content"
            component={Content}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ClockValuesAndIdentities"
            component={ClockValuesAndIdentities}
            options={{
              headerLeft: null,
              headerTitleAlign: 'center',
              headerStyle: styles.header,
              headerTintColor: '#FFF',
              title: 'Clock, Values & their Identities',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
