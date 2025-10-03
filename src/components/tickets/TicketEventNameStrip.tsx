import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { eventName?: string };

const TicketEventNameStrip = ({ eventName }: Props) => {
  return (
    <View style={styles.eventStrip}>
      <Text style={styles.eventStripText}>
        {eventName ?? 'Name of the event Goes here'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventStrip: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  eventStripText: { color: '#fff', fontSize: 12 },
});

export default TicketEventNameStrip;
