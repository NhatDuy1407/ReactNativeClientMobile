import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '../../../types/NavigationTypes';
import { Route } from '../../models/app.models';

export const NotFoundContainer = ({
  navigation,
}: RootStackScreenProps<Route.NOTFOUND>) => {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace(Route.MAIN)}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};
