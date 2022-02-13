import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CartSelectors } from '../state/cart.selectors';

const CartContainer = () => {
  const total = useSelector(CartSelectors.selectTotalPrice);
  const items = useSelector(CartSelectors.selectCartItems);

  const Totals = () => (
    <View style={styles.cartLineTotal}>
      <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
      <Text style={styles.lineRight}>$ {total}</Text>
    </View>
  );

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
};

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default CartContainer;
