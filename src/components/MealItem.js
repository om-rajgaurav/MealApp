import React from 'react';
import {Pressable, Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
        android_ripple={{color: '#ccc'}}>
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    // overflow: 'hidden',
    elevation: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
