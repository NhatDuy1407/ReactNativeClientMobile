import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Route } from '../../../core/models/app.models';
import { CartSelectors } from '../state/cart.selectors';

const CartIconContainer = () => {
  const count = useSelector(CartSelectors.selectItemsCount);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.dispatch(CommonActions.navigate(Route.CART));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onPress}>
        Cart ({count})
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 34,
    padding: 8,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CartIconContainer;
