import { View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Filters({ filters, selectedFilter, setFilter }) {
  return (
    <View style={styles.container}>
      { filters.map(filter => {
        const isSelected = filter === selectedFilter;
        return (
          <TouchableHighlight style={[styles.filterButton, isSelected && styles.selectedFilterButton]} onPress={() => setFilter(filter)} underlayColor={'#202F41'} activeOpacity={0.8} key={filter}>
            <Text style={[styles.filterText, isSelected && styles.selectedFilterText]}>{filter}</Text>
          </TouchableHighlight>
        )
      })}
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  filterButton: {
    backgroundColor: '#324153',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 3,
  },
  filterText: {
    color: '$textColor',
    opacity: 0.5,
  },
  selectedFilterButton: {
    backgroundColor: '#336AFF',
  },
  selectedFilterText: {
    opacity: 1,
  }
});
