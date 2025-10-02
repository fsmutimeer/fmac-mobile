import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { stepText?: string };

const ChooseHeader = ({ stepText = 'Step 1/4' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose tickets</Text>
      <Text style={styles.step}>{stepText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  title: { fontSize: 14, fontWeight: '800', color: '#111' },
  step: { fontSize: 11, color: '#777' },
});

export default ChooseHeader;
