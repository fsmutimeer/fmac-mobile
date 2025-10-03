import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export type PaymentDetails = {
  cardNumber: string;
  cardName: string;
  expDate: string;
  cvv: string;
};

type Props = {
  value: PaymentDetails;
  onChange: (next: PaymentDetails) => void;
};

const PaymentForm = ({ value, onChange }: Props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Card number"
        placeholderTextColor="#9ca3af"
        keyboardType="number-pad"
        value={value.cardNumber}
        onChangeText={t => onChange({ ...value, cardNumber: t })}
      />
      <TextInput
        style={styles.input}
        placeholder="Name of the card"
        placeholderTextColor="#9ca3af"
        value={value.cardName}
        onChangeText={t => onChange({ ...value, cardName: t })}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.half]}
          placeholder="Exp date"
          placeholderTextColor="#9ca3af"
          value={value.expDate}
          onChangeText={t => onChange({ ...value, expDate: t })}
        />
        <TextInput
          style={[styles.input, styles.half]}
          placeholder="CVV"
          placeholderTextColor="#9ca3af"
          keyboardType="number-pad"
          value={value.cvv}
          onChangeText={t => onChange({ ...value, cvv: t })}
          secureTextEntry
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8 },
  half: { flex: 1 },
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

export default PaymentForm;
