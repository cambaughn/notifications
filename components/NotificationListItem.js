
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function NotificationListItem({ notification }) {
  if (notification.type === 'mention') {
    return (
      <View style={styles.container}>
        
      </View>
    );
  } else if (notification.type === 'friend_request') {
    return (
      <View style={styles.container}>
        
      </View>
    );
  } else if (notification.type === 'invite') {
    return (
      <View style={styles.container}>
        
      </View>
    );
  } else if (notification.type === 'direct_message') {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }

}

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#273246',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


