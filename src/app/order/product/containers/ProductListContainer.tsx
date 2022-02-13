import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../core/store/app.store';
import { CartActions } from '../../cart/state/cart.actions';
import { Product } from '../../models/order.models';
import ProductItem from '../components/ProductItem';
import { ProductActions } from '../state/product.actions';
import { ProductSelectors } from '../state/product.selectors';
import { ProductProps } from '../types/productTypes';

const ProductListContainer = () => {
  const products = useSelector(ProductSelectors.selectProducts);
  const dispatch = useAppDispatch();
  dispatch(ProductActions.loadProducts());

  const addCartHandler = (item: Product) => {
    dispatch(CartActions.addItemToCart(item));
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductItem
      {...({
        product: item,
        onAddCart: addCartHandler,
      } as ProductProps)}
    />
  );

  return (
    <View>
      <Text>Product List</Text>
      <View />
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductListContainer;
