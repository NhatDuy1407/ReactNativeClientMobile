import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Route } from '../../core/models/app.models';

export type OtherStackParamList = {
  [Route.OTHER]: undefined;
  [Route.ABOUT]: undefined;
};

export type OtherStackScreenProps<Screen extends keyof OtherStackParamList> =
  NativeStackScreenProps<OtherStackParamList, Screen>;
