import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Route } from '../../core/models/app.models';
import { HomeContainer } from '../containers/HomeContainer';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.HOME} component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
