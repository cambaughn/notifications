import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function NotificationIcon({ notificationType }) {
  const determineIcon = () => {
    if (notificationType === 'mention') {
      return 'at-sign';
    } else if (notificationType === 'friend_request') {
      return 'user-plus';
    } else if (notificationType === 'invite') {
      return 'globe';
    } else if (notificationType === 'direct_message') {
      return 'message-square';
    }
  }
  return (
    <View style={styles.container}>
      <Feather name={determineIcon()} size={22} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: '#6D68FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
});
