import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NotificationsContainer from './components/NotificationsContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <NotificationsContainer />
      <Text>Open up App.js to start working on your app! :)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
