import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Filters from './Filters';

export default function NotificationsContainer() {
  const filters = ['All', 'Mentions', 'Friend Requests', 'Invites'];
  const [selectedFilter, setSelectedFilter] = useState('All');

  const setFilter = (filter) => {
    console.log('setting filter ', filter)
    setSelectedFilter(filter);
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
