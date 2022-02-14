import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreenContainer from '../core/containers/SplashScreenContainer';
import { Route } from '../core/models/app.models';
import MainNavigator from './MainNavigator';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.SPLASH}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={Route.SPLASH}
          component={SplashScreenContainer}
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
