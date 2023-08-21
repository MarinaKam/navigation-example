import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../../screens/WelcomeScreen';
import { screens } from '../../routes';

const Stack = createNativeStackNavigator();

export const WelcomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={screens.Welcome}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};
