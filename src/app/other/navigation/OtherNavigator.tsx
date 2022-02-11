import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Route } from '../../core/models/app.models';
import { AboutContainer } from '../containers/AboutContainer';
import OtherContainer from '../containers/OtherContainer';

const Stack = createNativeStackNavigator();

const OtherNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.OTHER} component={OtherContainer} />
      <Stack.Screen name={Route.ABOUT} component={AboutContainer} />
    </Stack.Navigator>
  );
};

export default OtherNavigator;
