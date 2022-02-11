import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthSelectors } from '../../core/auth/state/auth.selectors';
import { TabInfo } from '../../shared/components/TabInfo';

export const HomeContainer = () => {
  const logedInUser = useSelector(AuthSelectors.selectLoggedUser);

  return (
    <View>
      <Text>Home</Text>
      <View>
        <Text>{logedInUser?.username}</Text>
      </View>
      <TabInfo content="Home Screen" />
    </View>
  );
};
