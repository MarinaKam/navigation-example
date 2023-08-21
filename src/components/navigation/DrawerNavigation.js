import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet } from 'react-native';
import { routes, screens } from '../../routes';
import { BottomTabNavigator } from './TabNavigaton';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const currentRouteName = props.currentRoute;

  return (
    <DrawerContentScrollView {...props}>
      {routes.filter(route => route.showInDrawer).map((route) => {
        const focusedRoute = routes.find(r => r.name === currentRouteName);
        const focused = focusedRoute ?
          route.name === focusedRoute?.focusedRoute :
          route.name === screens.WelcomeStack;

        return (
          <DrawerItem
            key={route.name}
            label={() => (
              <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                {route.title}
              </Text>
            )}
            onPress={() => props.navigation.navigate(route.name)}
            style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
          />
        )
      })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const navigate = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#3c0a6b',
        },
        overlayColor: 'transparent',
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
      })}
      drawerContent={(props) => (
        <CustomDrawerContent
          currentRoute={navigate?.getCurrentRoute()?.name || screens.Welcome}
          {...props}
        />
      )}
    >
      <Drawer.Screen
        name={screens.WelcomeTab}
        component={BottomTabNavigator}
        options={{ title: '' }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#3c0a6b',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#f0e1ff',
  },
})

export default DrawerNavigator;