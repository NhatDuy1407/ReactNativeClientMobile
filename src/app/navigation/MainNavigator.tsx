import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from '../definition/models/app.models';
import LoginContainer from '../features/auth/LoginContainer';
import { AuthActions } from '../features/auth/state/auth.actions';
import { AuthSelectors } from '../features/auth/state/auth.selectors';
import NotFoundContainer from '../features/notfound/NotFoundContainer';
import { useAppDispatch } from '../store/store';
import { TabNavigator } from './TabNavigation';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(AuthSelectors.selectIsAuthenticated);

  dispatch(AuthActions.restoreToken());

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          options={{ headerShown: false }}
          name={Route.MAIN}
          component={TabNavigator}
        />
      ) : (
        // Auth screens
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Route.LOGIN} component={LoginContainer} />
        </Stack.Group>
      )}

      <Stack.Screen
        name={Route.NOTFOUND}
        component={NotFoundContainer}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
