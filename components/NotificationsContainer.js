import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import NotificationList from './NotificationList';
// Mock Data
import initialNotifications from '../mocks/notifications.json';
// Util
import { formatDistanceToNow, parseISO } from 'date-fns';


// Following a container + pure component model
// This container handles all state and data fetching
// Children are pure components that only receive props
export default function NotificationsContainer() {
  const filters = ['All', 'Mentions', 'Friend Requests', 'Invites'];
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [notifications, setNotifications] = useState([]);

  const setFilter = (filter) => {
    setSelectedFilter(filter);
  }

  const getInitialNotifications = () => {
    // Simulate an API call for the intial notifications (notifications that already exist in the database)
    setTimeout(() => {
      let processedNotifications = initialNotifications.map(notification => {
        // Add a new property to the notification object called 'read'
        // This will be used to determine if the notification has been read or not
        notification.read = false;
        notification.timeago = formatDistanceToNow(parseISO(notification.timestamp), { addSuffix: true });
        console.log(notification.timeago)
        return notification;
      })
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setNotifications(processedNotifications);
    }, 1000);
  }

  useEffect(getInitialNotifications, []);

  // In practice, I might suggest just having the notifications be marked as read once they're on the screen for a certain amount of time, indicating that the user has seen them, but for this purpose, I'll just mark them as read when they're pressed
  const markRead = (id) => {
    let updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        notification.read = true;
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <Filters filters={filters} selectedFilter={selectedFilter} setFilter={setFilter} />
        <NotificationList notifications={notifications} markRead={markRead} />
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
