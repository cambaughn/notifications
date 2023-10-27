import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationsContainer from './components/NotificationsContainer';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NotificationsContainer />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}


EStyleSheet.build({
  // Global styles
  $textColor: 'white',
});


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1C2B3E',
    paddingTop: 60,
  }
});
