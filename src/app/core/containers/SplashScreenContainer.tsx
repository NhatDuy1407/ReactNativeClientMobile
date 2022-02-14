import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Route } from '../models/app.models';
import { UIActions } from '../state/ui/ui.actions';
import { UISelectors } from '../state/ui/ui.selectors';
import { useAppDispatch } from '../store/app.store';

const SplashScreenContainer = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  dispatch(UIActions.initializeApp());

  const isInitializedApp = useSelector(UISelectors.selectIsInitializedApp);

  useEffect(() => {
    if (!isInitializedApp) {
      navigation.navigate(Route.APP);
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
