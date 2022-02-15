import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Route } from '../../definition/models/app.models';
import { UIActions } from '../../store/state/app.actions';
import { AppSelectors } from '../../store/state/app.selectors';
import { useAppDispatch } from '../../store/store';
import { splashStyles } from './styles/splash.style';

const SplashContainer = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const isInitializedApp = useSelector(AppSelectors.selectIsInitializedApp);

  dispatch(UIActions.initializeApp());

  useEffect(() => {
    if (!isInitializedApp) {
      navigation.dispatch(dispatch(CommonActions.navigate(Route.APP)));
    }
  });

  return (
    <View style={splashStyles.viewStyles}>
      <Text style={splashStyles.textStyles}>Loading</Text>
    </View>
  );
};

export default SplashContainer;
