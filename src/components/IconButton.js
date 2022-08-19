import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const IconButton = ({onPress, icon, color}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? styles.button : null)}>
      <Entypo name={icon} size={25} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    opacity: 0.5,
  },
});
