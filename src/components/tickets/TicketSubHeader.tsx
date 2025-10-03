import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { title: string; stepText?: string };

const TicketSubHeader = ({ title, stepText = 'Step 1/4' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 0,
  },
  title: { fontSize: 16, fontWeight: '800', color: '#111' },
  step: { fontSize: 16, color: '#777' },
});

export default TicketSubHeader;
