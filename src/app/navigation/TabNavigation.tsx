import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Route } from '../core/models/app.models';
import HomeNavigator from '../home/navigation/HomeNavigator';
import OtherNavigator from '../other/navigation/OtherNavigator';
import { TabBarIcon } from '../shared/components/TabBarIcon';

const BottomTab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faHome} color={color} />,
        }}
        name={Route.HOME}
        component={HomeNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faBars} color={color} />,
        }}
        name={Route.OTHER}
        component={OtherNavigator}
      />
    </BottomTab.Navigator>
  );
};
