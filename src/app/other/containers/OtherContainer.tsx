import React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthActions } from '../../core/auth/state/auth.actions';
import { Route } from '../../core/models/app.models';
import { useAppDispatch } from '../../core/store/app.store';
import appStyles from '../../shared/styles/app.styles';
import { OtherStackScreenProps } from '../types/OtherTypes';

const OtherContainer = ({ navigation }: OtherStackScreenProps<Route.OTHER>) => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
  };

  return (
    <View style={appStyles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate(Route.ABOUT)}
      />
      <Text>Logout</Text>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default OtherContainer;
