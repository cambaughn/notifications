import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import NotificationList from './NotificationList';
// Mock Data
import mentions from '../mocks/mentions.json';

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
    // Simulate an API call
    setTimeout(() => {
      setNotifications(mentions);
    }, 1000);
  }

  useEffect(getInitialNotifications, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <Filters filters={filters} selectedFilter={selectedFilter} setFilter={setFilter} />
        <NotificationList notifications={notifications} />
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
