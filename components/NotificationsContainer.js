import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Filters from './Filters';

// Following a container + pure component model
// This container handles all state and data fetching
// Children are pure components that only receive props
export default function NotificationsContainer() {
  const filters = ['All', 'Mentions', 'Friend Requests', 'Invites'];
  const [selectedFilter, setSelectedFilter] = useState('All');

  const setFilter = (filter) => {
    setSelectedFilter(filter);
  }

  const getInitialNotifications = () => {
    
  }

  return (
    <View style={styles.container}>
      <Filters filters={filters} selectedFilter={selectedFilter} setFilter={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
