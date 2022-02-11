import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginContainer from '../core/auth/containers/LoginContainer';
import { AuthActions } from '../core/auth/state/auth.actions';
import { AuthSelectors } from '../core/auth/state/auth.selectors';
import { Route } from '../core/models/app.models';
import { NotFoundContainer } from '../core/notfound/containers/NotFoundContainer';
import { useAppDispatch } from '../core/store/app.store';
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
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
