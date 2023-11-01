import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import NotificationList from './NotificationList';
// Mock Data
import initialNotifications from '../mocks/notifications.json';
// Util
import { useSelector, useDispatch } from 'react-redux'
import { addNotifications, updateNotification } from '../redux/notificationSlice';
import { generateNotification } from '../mocks/notificationGenerator';

// Following a container + pure component model
// This container handles all state and data fetching
// Children are pure components that only receive props
export default function NotificationsContainer() {
  // These filters could be stored in Redux as well
  // However, because they're not shared with any other sibling components or other views, I've chosen to keep them in local state
  // If they were shared in the future between different views, I would move them into Redux
  const filters = ['All', 'Mentions', 'Friend Requests', 'Invites'];
  const [selectedFilter, setSelectedFilter] = useState('All');
  // For the notifications, however, I've stored them in Redux using Redux Toolkit
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  // HANDLE FILTERS
  const setFilter = (filter) => {
    setSelectedFilter(filter);
  }

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

  // HANDLE USER ACTIONS
  // In the full app, handling a press on the notification would take the user to the appropriate place in the app
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

  // Get initial notifications - this is a stand-in for an initial API call to the database
  const getInitialNotifications = () => {
    // Simulate an API call for the initial notifications (notifications that already exist in the database)
    setTimeout(() => {
      let processedNotifications = initialNotifications.map(notification => {
        // Add a new property to the notification object called 'read'
        // This will be used to determine if the notification has been read or not
        notification.read = false;
        return notification;
      })
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      dispatch(addNotifications(processedNotifications));
    }, 1000);
  }

  useEffect(getInitialNotifications, []);

  // Generate a new notification every 5-30 seconds
  // This is a stand-in for a real-time notification system
  useEffect(() => {
    // Intervals between 5-15 seconds per notification
    const generateRandomInterval = () => {
      // Generate a random number between 5 and 15
      return (Math.random() * (15 - 5) + 5) * 1000;
    }

    const generateNextNotification = () => {
      const newNotification = generateNotification();
      // Add the notification to the Redux store
      dispatch(addNotifications([newNotification]));
      // After each notification, create a new timeout for the next notification
      setTimeout(generateNextNotification, generateRandomInterval());
    }

    // Call to kick off the interval - this will run once on component mount and then call itself recursively
    // Initial notification happens 5 seconds after mount
    setTimeout(generateNextNotification, 5000);

    // Cleanup function
    return () => {
      clearTimeout(generateNextNotification);
    };
  }, []);

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
