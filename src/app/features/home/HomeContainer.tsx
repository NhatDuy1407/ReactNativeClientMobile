import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import TabInfo from '../../components/TabInfo';
import { AuthSelectors } from '../auth/state/auth.selectors';

const HomeContainer = () => {
  const currentUser = useSelector(AuthSelectors.selectCurrentUser);

  return (
    <View>
      <Text>{currentUser?.username}</Text>
      <TabInfo content="Home Container" />
    </View>
  );
};

export default HomeContainer;
