import { Fragment } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import NotificationListItem from './NotificationListItem';

export default function NotificationList({ notifications, markRead, respondToFriendRequest }) {
  return (
    <View style={styles.container}>
      { notifications.map((notification, index) => {
        return (
          <Fragment key={notification.id}>
            { notification.timeago !== notifications[index - 1]?.timeago &&
              <Text style={styles.dateHeading}>{notification.timeago}</Text>
            }
            <NotificationListItem notification={notification} markRead={markRead} respondToFriendRequest={respondToFriendRequest} />
          </Fragment>
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
