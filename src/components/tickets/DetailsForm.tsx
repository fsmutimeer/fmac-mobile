import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

export type TicketDetails = {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
};

type Props = {
  title: string;
  value: TicketDetails;
  onChange: (next: TicketDetails) => void;
  dayLabels?: string[];
};

const DetailsForm = ({ title, value, onChange, dayLabels = [] }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {dayLabels.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 6 }}
        >
          <View style={styles.daysRow}>
            {dayLabels.map((d, i) => (
              <View key={`${d}-${i}`} style={styles.dayChip}>
                <Text style={styles.dayChipText}>
                  {dayLabels[i].split(' ')[0] + ' '}
                  {dayLabels[i].split(' ')[1] + ' '}
                  <Text style={styles.monthChipText}>
                    {dayLabels[i].split(' ')[2] + ' '}
                    {dayLabels[i].split(' ')[3]}
                  </Text>
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="First name"
        placeholderTextColor="#9ca3af"
        value={value.firstName}
        onChangeText={t => onChange({ ...value, firstName: t })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor="#9ca3af"
        value={value.lastName}
        onChangeText={t => onChange({ ...value, lastName: t })}
      />
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email"
        placeholderTextColor="#9ca3af"
        value={value.email}
        onChangeText={t => onChange({ ...value, email: t })}
      />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Contact number"
        placeholderTextColor="#9ca3af"
        value={value.contactNumber}
        onChangeText={t => onChange({ ...value, contactNumber: t })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  title: { fontSize: 12, color: '#444', marginBottom: 6, fontWeight: '700' },
  daysRow: { flexDirection: 'row', gap: 6 },
  dayChip: {
    backgroundColor: '#F3F4F6',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
  },
  dayChipText: { fontSize: 10, color: '#ef4444', fontWeight: '700' },
  monthChipText: {
    fontSize: 10,
    color: '#444',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 8,
    fontSize: 12,
    color: '#111',
  },
});

export default DetailsForm;
