import { StyleSheet, View } from 'react-native';

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

  },
});
