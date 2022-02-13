import { faBars, faHome, faStore } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Route } from '../core/models/app.models';
import HomeNavigator from '../home/navigation/HomeNavigator';
import OrderNavigator from '../order/navigation/OrderNavigation';
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
        name={Route.HOME_TAB}
        component={HomeNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={faStore} color={color} />
          ),
        }}
        name={Route.ORDER_TAB}
        component={OrderNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faBars} color={color} />,
        }}
        name={Route.OTHER_TAB}
        component={OtherNavigator}
      />
    </BottomTab.Navigator>
  );
};
