import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoriesGridTitle = ({item}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: '#ccc'}}>
        <View style={[styles.innerView, {backgroundColor: item.color}]}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 3,
    },
  },
  button: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
