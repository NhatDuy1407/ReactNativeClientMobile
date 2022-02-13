import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from '../../core/models/app.models';
import CartContainer from '../cart/containers/CartContainer';
import CartIconContainer from '../cart/containers/CartIconContainer';
import CategoriesContainer from '../categories/containers/CategoriesContainer';
import OrderRightHeader from '../components/OrderRightHeader';
import OrderContainer from '../containers/OrderContainer';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Route.ORDER}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.container}>
              <CartIconContainer navigation={navigation} />
              <OrderRightHeader navigation={navigation} />
            </View>
          ),
        })}
        name={Route.ORDER}
        component={OrderContainer}
      />
      <Stack.Screen name={Route.CART} component={CartContainer} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Route.CATEGORIES} component={CategoriesContainer} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderNavigator;
