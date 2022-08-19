import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const List = ({data}) => {
  return data.map(steps => (
    <View key={steps} style={styles.listItem}>
      <Text style={styles.Text}>{steps}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e48b53',
    borderRadius: 8,
  },
  Text: {
    color: '#3c1212',
    textAlign: 'center',
  },
});
