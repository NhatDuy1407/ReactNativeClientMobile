import React from 'react';
import { Text, View } from 'react-native';

const TabInfo = ({ content }: { content: string }) => {
  return (
    <View>
      <Text>Here you are: {content}</Text>
    </View>
  );
};

export default TabInfo;
