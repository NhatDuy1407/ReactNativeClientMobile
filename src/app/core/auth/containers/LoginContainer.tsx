import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, TextInput, View } from 'react-native';
import { useAppDispatch } from '../../store/app.store';
import { AuthActions } from '../state/auth.actions';

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    dispatch(
      AuthActions.userLogin({
        username,
        password,
      })
    );
  };

  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={value => setUsername(value)}
        />
      </View>

      <View>
        <TextInput
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
      </View>

      <Button title="Login" onPress={loginHandler} />
    </KeyboardAvoidingView>
  );
};

export default LoginContainer;
