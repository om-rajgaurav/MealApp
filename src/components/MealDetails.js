import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MealDetails = ({duration, complexity, affordability, textStyle}) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.mealDetail, textStyle]}>{duration}m</Text>
      <Text style={[styles.mealDetail, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.mealDetail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  mealDetail: {
    marginHorizontal: 4,
  },
});
