import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Filters() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: '90vw',
    height: 100,
    backgroundColor: 'blue',
  },
  filterButton: {
    backgroundColor: '#324153',
  }
});
