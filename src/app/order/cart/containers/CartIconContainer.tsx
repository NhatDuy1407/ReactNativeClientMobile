import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Route } from '../../../core/models/app.models';
import { CartSelectors } from '../state/cart.selectors';

const CartIconContainer = ({ navigation }: any) => {
  const count = useSelector(CartSelectors.selectItemsCount);

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate(Route.CART);
        }}
      >
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
