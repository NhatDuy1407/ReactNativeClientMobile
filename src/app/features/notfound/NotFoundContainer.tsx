import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Route } from '../../definition/models/app.models';

const NotFoundContainer = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.dispatch(CommonActions.navigate(Route.MAIN))}
      >
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundContainer;
