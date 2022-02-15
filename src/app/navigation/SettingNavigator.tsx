import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Route } from '../definition/models/app.models';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Route.SETTING}>
      <Stack.Screen name={Route.SETTING} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
