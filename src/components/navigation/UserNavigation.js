import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen } from '../../screens/UserScreen';
import { screens } from '../../routes';

const Stack = createNativeStackNavigator();

export const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={screens.User}
        component={UserScreen}
      />
    </Stack.Navigator>
  );
};
