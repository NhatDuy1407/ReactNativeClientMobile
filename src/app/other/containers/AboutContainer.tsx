import React from 'react';
import { Text, View } from 'react-native';
import TabInfo from '../../shared/components/TabInfo';

const AboutContainer = () => {
  return (
    <View>
      <Text>About</Text>
      <View />
      <TabInfo content="About Screen" />
    </View>
  );
};

export default AboutContainer;
