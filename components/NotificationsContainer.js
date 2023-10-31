import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import NotificationList from './NotificationList';
// Mock Data
import initialNotifications from '../mocks/notifications.json';
// Util
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux'
import { addNotifications, updateNotification } from '../redux/notificationSlice';


// Following a container + pure component model
// This container handles all state and data fetching
// Children are pure components that only receive props
export default function NotificationsContainer() {
  const filters = ['All', 'Mentions', 'Friend Requests', 'Invites'];
  const [selectedFilter, setSelectedFilter] = useState('All');
  // const [notifications, setNotifications] = useState([]);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const setFilter = (filter) => {
    setSelectedFilter(filter);
  }

  const getInitialNotifications = () => {
    // Simulate an API call for the initial notifications (notifications that already exist in the database)
    setTimeout(() => {
      let processedNotifications = initialNotifications.map(notification => {
        // Add a new property to the notification object called 'read'
        // This will be used to determine if the notification has been read or not
        notification.read = false;
        notification.timeago = formatDistanceToNow(parseISO(notification.timestamp), { addSuffix: true });
        return notification;
      })
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      dispatch(addNotifications(processedNotifications));
      // setNotifications(processedNotifications);
    }, 1000);
  }

  useEffect(getInitialNotifications, []);

  const filterNotifications = () => {
    if (selectedFilter === 'Mentions') {
      return notifications.filter(notification => notification.type === 'mention');
    } else if (selectedFilter === 'Friend Requests') {
      return notifications.filter(notification => notification.type === 'friend_request');
    } else if (selectedFilter === 'Invites') {
      return notifications.filter(notification => notification.type === 'invite');
    } else {
      return notifications;
    }
  }

  // In practice, I might suggest just having the notifications be marked as read once they're on the screen for a certain amount of time, indicating that the user has seen them, but for this purpose, I'll just mark them as read when they're pressed
  // Also, in the full app, handling a press on the notification would take the user to the appropriate place in the app
  const markRead = (id) => {
    const update = { read: true }
    dispatch(updateNotification({ id, update }));
  }

  const respondToFriendRequest = (id, response) => {
    const update = { 
      read: true, 
      friend_request_response: response
    }
    dispatch(updateNotification({ id, update }));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <Filters filters={filters} selectedFilter={selectedFilter} setFilter={setFilter} />
        <NotificationList notifications={filterNotifications()} markRead={markRead} respondToFriendRequest={respondToFriendRequest} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  mainContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
