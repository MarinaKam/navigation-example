import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from 'react-native';
import { routes, screens } from '../../routes';
import { UserNavigation } from './UserNavigation';
import { WelcomeNavigation } from './WelcomeNavigation';

const Tab = createBottomTabNavigator();

const bottomTabOptions = ({ route }) => {
  const item = routes.find((routeItem) => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />, // if item.showInTab is false then we are using this view to hide it.
      headerShown: false,
      tabBarActiveTintColor: '#3c0a6b',
      title: item.title,
    };
  }

  return {
    title: item.title,
    headerShown: false,
    tabBarIcon: ({ color, size }) => item.icon({ color, size }),
    tabBarActiveTintColor: '#3c0a6b',
  };
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabOptions}>
      <Tab.Screen
        name={screens.WelcomeStack}
        component={WelcomeNavigation}
      />

      <Tab.Screen
        name={screens.UserStack}
        component={UserNavigation}
      />
    </Tab.Navigator>
  );
};
