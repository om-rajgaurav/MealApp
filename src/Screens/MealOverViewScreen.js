import React, {useLayoutEffect} from 'react';

import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList/MealList';

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
  return <MealList items={renderMealItem} />;
};
export default MealOverViewScreen;

const styles = StyleSheet.create({});
