import { View, Text, StyleSheet, Button } from 'react-native';

export const UserScreen = ({ navigation }) => {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>

      <Button title="Open Drawer" onPress={openDrawer} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
