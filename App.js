import 'react-native-gesture-handler';
import { createRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/components/navigation/DrawerNavigation';

const navigationRef = createRef();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}
