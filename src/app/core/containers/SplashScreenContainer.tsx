import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Route } from '../models/app.models';
import { UIActions } from '../state/ui/ui.actions';
import { UISelectors } from '../state/ui/ui.selectors';
import { useAppDispatch } from '../store/app.store';

const SplashScreenContainer = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const isInitializedApp = useSelector(UISelectors.selectIsInitializedApp);

  dispatch(UIActions.initializeApp());

  useEffect(() => {
    if (!isInitializedApp) {
      navigation.dispatch(dispatch(CommonActions.navigate(Route.APP)));
    }
  });

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  textStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SplashScreenContainer;
