import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

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
};

const DetailsForm = ({ title, value, onChange }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
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
