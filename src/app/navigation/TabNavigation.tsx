import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TabBarIcon } from '../components/TabBarIcon';
import { Route } from '../definition/models/app.models';
import HomeNavigator from './HomeNavigator';
import SettingNavigator from './SettingNavigator';

const BottomTab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faHome} color={color} />,
          tabBarShowLabel: false,
        }}
        name={Route.HOME_TAB}
        component={HomeNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faBars} color={color} />,
          tabBarShowLabel: false,
        }}
        name={Route.SETTING_TAB}
        component={SettingNavigator}
      />
    </BottomTab.Navigator>
  );
};
