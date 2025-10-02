import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type BasketItem = {
  id: string;
  label: string;
  qty: number;
  price: number;
};

type Props = {
  items: BasketItem[];
  onRemove: (label: string) => void;
};

const BasketTable = ({ items, onRemove }: Props) => {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={[styles.headerText, { flex: 1 }]}>Item #</Text>
        <Text style={[styles.headerText, { flex: 3 }]}>Detail</Text>
        <Text style={[styles.headerText, { width: 60, textAlign: 'right' }]}>
          Action
        </Text>
      </View>
      {items.map((b, idx) => (
        <View key={b.id} style={styles.row}>
          <Text style={[styles.cell, { flex: 1 }]}>{idx + 1}</Text>
          <View style={{ flex: 3 }}>
            <Text style={styles.cellStrong}>{b.label}</Text>
            <Text style={styles.cellNote}>
              ${b.price.toFixed(2)} · {b.qty}x
            </Text>
          </View>
          <View style={{ width: 60, alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity>
                <Icon name="pencil-outline" size={16} color="#444" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onRemove(b.label)}>
                <Icon name="trash-can-outline" size={16} color="#B91C1C" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  headerText: { fontSize: 11, color: '#666', fontWeight: '700' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  cell: { fontSize: 12, color: '#444' },
  cellStrong: { fontSize: 12, color: '#111', fontWeight: '700' },
  cellNote: { fontSize: 11, color: '#666' },
});

export default BasketTable;
