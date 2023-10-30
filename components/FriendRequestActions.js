import { View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function FriendRequestActions({ respondToFriendRequest }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={[styles.button, styles.accept]} onPress={() => respondToFriendRequest('accepted')} underlayColor={'#ECECEC'} activeOpacity={0.5}>
        <Text style={styles.acceptText}>Accept</Text>
      </TouchableHighlight>

      <TouchableHighlight style={[styles.button, styles.decline]} onPress={() => respondToFriendRequest('declined')} underlayColor={'#273246'} activeOpacity={0.5}>
        <Text style={styles.declineText}>Decline</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 15,
  },
  button: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 100,
  },
  accept: {
    backgroundColor: 'white',
  },
  acceptText: {
    color: '#273246',
    fontWeight: 'bold',
  },
  decline: {
    borderWidth: 0.3,
    borderColor: 'white',
  },
  declineText: {
    color: '$textColor',
  },
  selectedFilterButton: {
    backgroundColor: '#336AFF',
  },
  selectedFilterText: {
    opacity: 1,
  }
});
