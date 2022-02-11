import React from 'react';
import { Text, View } from 'react-native';

export const TabInfo = ({ content }: { content: string }) => {
  return (
    <View>
      <Text>Here you are: {content}</Text>
    </View>
  );
};
