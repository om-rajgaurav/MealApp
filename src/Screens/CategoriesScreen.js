import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CategoriesGridTitle from '../components/CategoriesGridTitle';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = ({navigation}) => {
  function renderCategoryItem({item}) {
    function onPressHandler() {
      navigation.navigate('MealOverView', {
        categoryID: item.id,
      });
    }

    return <CategoriesGridTitle item={item} onPress={onPressHandler} />;
  }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  );
};

export default CategoriesScreen;
