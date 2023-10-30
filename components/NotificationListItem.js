
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import NotificationIcon from './NotificationIcon';
import FriendRequestActions from './FriendRequestActions';

export default function NotificationListItem({ notification, markRead, respondToFriendRequest }) {
  // I normally avoid rendering logic in components, but this is a case where it makes sense, simply due to the flexibility of the component and put this logic in one place
  const renderNotificationText = () => {
    // Switch statement for the different notification types
    switch(notification.type) {
      case 'mention':
        return (
          <>
            <TouchableOpacity style={styles.userButton}>
              <Text style={styles.notificationText}>@{notification.origin_user_username}</Text>
            </TouchableOpacity>
            <Text style={styles.notificationText}> mentioned you in </Text>
            <TouchableOpacity style={styles.channelButton}>
              <Text style={styles.notificationText}>#{notification.channel_name}</Text>
            </TouchableOpacity>
          </>
        )
      case 'friend_request':
        return (
          <>
            <TouchableOpacity style={styles.userButton}>
              <Text style={styles.notificationText}>@{notification.origin_user_username}</Text>
            </TouchableOpacity>
            <Text style={styles.notificationText}> sent you a friend request</Text>
          </>
        )
      case 'invite':
        return (
          <>
            <TouchableOpacity style={styles.userButton}>
              <Text style={styles.notificationText}>@{notification.origin_user_username}</Text>
            </TouchableOpacity>
            <Text style={styles.notificationText}> invited you to join </Text>
            <TouchableOpacity style={styles.channelButton}>
              <Text style={styles.notificationText}>#{notification.channel_name}</Text>
            </TouchableOpacity>
          </>
        )
      case 'direct_message':
        return (
          <>
            <TouchableOpacity style={styles.userButton}>
              <Text style={styles.notificationText}>@{notification.origin_user_username}</Text>
            </TouchableOpacity>
            <Text style={styles.notificationText}> sent you a direct message</Text>
          </>
        )
      default:
        return null
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => markRead(notification.id)}>
      <View style={styles.leftSide}>
        <NotificationIcon notificationType={notification.type} />
          <View style={styles.mainContent}>
            <View style={styles.notificationTextWrapper}>
              {renderNotificationText()}
            </View>
            <Text style={styles.timeAgo}>{notification.timeago}</Text>
            { notification.type === 'friend_request' && !notification.friend_request_response &&
              <FriendRequestActions respondToFriendRequest={(response) => respondToFriendRequest(notification.id, response)} />
            }
          </View>
      </View>

      <View style={styles.rightSide}>
        {!notification.read && <View style={styles.unreadIndicator}></View>}
      </View>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#273246',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  notificationTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  notificationText:{
    color: '$textColor',
  },
  userButton: {
    backgroundColor: '#3D4959',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
  },
  channelButton: {
    backgroundColor: '#604E40',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
  },
  lightText: {
    color: '$textColor',
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#6D68FF',
    borderRadius: 10,
  },
  timeAgo: {
    color: '#8A8A8A',
    marginTop: 5,
  }
});


