
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WatchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Watch Screen</Text>
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

export default WatchScreen;
