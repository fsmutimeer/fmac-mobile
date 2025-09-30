
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Text>Bottom Tabs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default BottomTabs;
