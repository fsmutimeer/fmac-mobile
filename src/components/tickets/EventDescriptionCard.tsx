import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { title: string; description: string };

const EventDescriptionCard = ({ title, description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 0,
  },
  title: { fontSize: 12, fontWeight: '700', color: '#111', marginBottom: 6 },
  text: { fontSize: 12, color: '#555', lineHeight: 18 },
});

export default EventDescriptionCard;
