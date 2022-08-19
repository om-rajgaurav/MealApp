import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Subtitle = ({children}) => {
  return (
    <View>
      <Text style={styles.subTitle}>{children}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    margin: 6,
    textAlign: 'center',
  },
  line: {
    width: '89%',
    height: 2,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
