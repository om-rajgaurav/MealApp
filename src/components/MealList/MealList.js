import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MealItem from './MealItem';

const MealList = ({items}) => {
  function renderMeal({item}) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <FlatList
      data={items}
      renderItem={renderMeal}
      keyExtractor={item => item.id}
    />
  );
};

export default MealList;

const styles = StyleSheet.create({});
