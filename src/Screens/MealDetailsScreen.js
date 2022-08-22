import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet, Text, Image, View, ScrollView, Button} from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/List';
import MealDetails from '../components/MealDetails';
import {FavouritesContext} from '../store/context/Favourite-Context';

import Subtitle from '../components/Subtitle';
import {MEALS} from '../data/dummy-data';

const MealDetailsScreen = ({route, navigation}) => {
  const FavouriteMealCtx = useContext(FavouritesContext);

  const catId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === catId);

  const MealisFavourite = FavouriteMealCtx.ids.includes(catId);

  function headerButtonPressHandler() {
    if (MealisFavourite) {
      FavouriteMealCtx.removeFavourite(catId);
    } else {
      FavouriteMealCtx.addFavourite(catId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={MealisFavourite ? 'star' : 'star-outline'}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    margin: 8,
  },
  textStyle: {
    color: '#fff',
  },
  outerContainer: {
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
  },
});
