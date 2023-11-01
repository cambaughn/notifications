import { Fragment } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import NotificationListItem from './NotificationListItem';
import { getDateHeading, getTimeAgo } from '../util/date';


export default function NotificationList({ notifications, markRead, respondToFriendRequest }) {
  return (
    <View style={styles.container}>
      { notifications.map((notification, index) => {
        let dateHeading = getDateHeading(notification.timestamp);
        let prevDateHeading = notifications[index - 1] ? getDateHeading(notifications[index - 1].timestamp) : null;
        let timeago = getTimeAgo(notification.timestamp);
        return (
          <View key={notification.id}>
            { dateHeading !== prevDateHeading &&
              <Text style={styles.dateHeading}>{dateHeading}</Text>
            }
            <NotificationListItem notification={notification} timeago={timeago} markRead={markRead} respondToFriendRequest={respondToFriendRequest} />
          </View>
        )
      })}
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 60,
  },
  dateHeading: {
    color: '#8A8A8A',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
  },
});
