import { StyleSheet, View } from 'react-native';
import NotificationListItem from './NotificationListItem';

export default function NotificationList({ notifications }) {
  return (
    <View style={styles.container}>
      { notifications.map(notification => {
        return (
          <NotificationListItem notification={notification} key={notification.id} />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    gap: 1,
    paddingBottom: 60,
  },
});
