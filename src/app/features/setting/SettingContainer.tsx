import React from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native-svg';
import { useAppDispatch } from '../../store/store';
import appStyles from '../../styles/app.styles';
import { AuthActions } from '../auth/state/auth.actions';

const SettingContainer = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
  };

  return (
    <View style={appStyles.center}>
      <Text>Logout</Text>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default SettingContainer;
