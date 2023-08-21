import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { UserScreen } from './screens/UserScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerType: isLargeScreen ? 'permanent' : 'back',
            drawerStyle: isLargeScreen ? null : { width: '80%' },
            overlayColor: 'transparent',
            headerStyle: {
              backgroundColor: '#3c0a6b',
            },
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#f0e1ff',
            drawerActiveTintColor: '#3c0a6b',
            // drawerStyle: {
            //   backgroundColor: '#fcf9ff'
            // }
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: 'Welcome Screen',
              drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
            }}
          />
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
