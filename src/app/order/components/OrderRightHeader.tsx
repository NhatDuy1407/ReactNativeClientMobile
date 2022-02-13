import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Pressable } from 'react-native';
import { Route } from '../../core/models/app.models';

const OrderRightHeader = ({ navigation }: any) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(Route.CATEGORIES)}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesomeIcon icon={faList} size={25} />
    </Pressable>
  );
};

export default OrderRightHeader;
