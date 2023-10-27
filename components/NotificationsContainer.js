import { StyleSheet, View } from 'react-native';
import Filters from './Filters';

export default function NotificationsContainer() {
  return (
    <View style={styles.container}>
      <Filters />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
