import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MealList from '../components/MealList/MealList';
import {FavouritesContext} from '../store/context/Favourite-Context';
import {MEALS} from '../data/dummy-data';

const FavouriteScreen = () => {
  const favouriteCTX = useContext(FavouritesContext);

  const favouriteMeal = MEALS.filter(meals =>
    favouriteCTX.ids.includes(meals.id),
  );
  return (
    <View>
      <MealList items={favouriteMeal} />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
