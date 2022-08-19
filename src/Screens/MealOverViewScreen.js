import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealOverViewScreen = ({route, navigation}) => {
  const catId = route.params.categoryID;

  const renderMealItem = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find(item => item.id === catId).title;

    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [catId, navigation]);

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

  return <FlatList data={renderMealItem} renderItem={renderMeal} />;
};

export default MealOverViewScreen;

const styles = StyleSheet.create({});
