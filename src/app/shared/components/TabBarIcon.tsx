import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';

export const TabBarIcon = (props: { icon: IconProp; color: string }) => {
  return <FontAwesomeIcon size={30} {...props} />;
};
