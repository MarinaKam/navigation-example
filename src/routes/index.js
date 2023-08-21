import { Ionicons } from '@expo/vector-icons';

export const screens = {
  Welcome: 'Welcome',
  WelcomeTab: 'WelcomeTab',
  WelcomeStack: 'WelcomeStack',
  User: "User",
  UserTab: "UserTab",
  UserStack: "UserStack",
};

export const routes = [
  {
    name: screens.WelcomeTab,
    focusedRoute: screens.WelcomeTab,
    title: screens.Welcome,
    showInTab: false,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  },
  {
    name: screens.WelcomeStack,
    focusedRoute: screens.WelcomeStack,
    title: screens.Welcome,
    showInTab: true,
    showInDrawer: true,
    icon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  },
  {
    name: screens.Welcome,
    focusedRoute: screens.WelcomeStack,
    title: screens.Welcome,
    showInTab: true,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  },
  {
    name: screens.UserTab,
    focusedRoute: screens.UserTab,
    title: screens.User,
    showInTab: false,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <Ionicons name="person" color={color} size={size} />
    ),
  },
  {
    name: screens.UserStack,
    focusedRoute: screens.UserStack,
    title: screens.User,
    showInTab: true,
    showInDrawer: true,
    icon: ({ color, size }) => (
      <Ionicons name="person" color={color} size={size} />
    ),
  },
  {
    name: screens.User,
    focusedRoute: screens.UserStack,
    title: screens.User,
    showInTab: true,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <Ionicons name="person" color={color} size={size} />
    ),
  },
];
