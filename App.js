import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserScreen } from './screens/UserScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <Text>Todo</Text>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="User" component={UserScreen} />
          <Drawer.Screen name="Article" component={WelcomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
