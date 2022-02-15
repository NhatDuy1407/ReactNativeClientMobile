import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Route } from '../definition/models/app.models';
import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.SPLASH}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={Route.SPLASH}
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={Route.APP}
          component={MainNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
