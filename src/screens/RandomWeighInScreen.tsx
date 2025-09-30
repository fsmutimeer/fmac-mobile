
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RandomWeighInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Random Weigh-In Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RandomWeighInScreen;
