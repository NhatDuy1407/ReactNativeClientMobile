import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Route } from '../../core/models/app.models';
import CartContainer from '../../order/cart/containers/CartContainer';
import CartIconContainer from '../../order/cart/containers/CartIconContainer';
import HomeContainer from '../containers/HomeContainer';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          headerRight: () => <CartIconContainer />,
        })}
        name={Route.HOME}
        component={HomeContainer}
      />

      <Stack.Screen name={Route.CART} component={CartContainer} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
