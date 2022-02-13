import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Route } from '../../core/models/app.models';

export type OrderStackParamList = {
  [Route.ORDER]: undefined;
  [Route.CATEGORIES]: undefined;
  [Route.CART]: undefined;
};

export type OrderStackScreenProps<Screen extends keyof OrderStackParamList> =
  NativeStackScreenProps<OrderStackParamList, Screen>;
