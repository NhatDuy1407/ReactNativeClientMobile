import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Route } from '../definition/models/app.models';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
