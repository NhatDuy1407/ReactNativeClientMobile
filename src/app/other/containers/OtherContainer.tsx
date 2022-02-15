import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthActions } from '../../core/auth/state/auth.actions';
import { Route } from '../../core/models/app.models';
import { useAppDispatch } from '../../core/store/app.store';
import appStyles from '../../shared/styles/app.styles';

const OtherContainer = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
  };

  return (
    <View style={appStyles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.dispatch(CommonActions.navigate(Route.ABOUT))}
      />
      <Text>Logout</Text>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default OtherContainer;
