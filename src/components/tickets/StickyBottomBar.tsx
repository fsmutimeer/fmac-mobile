import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  label: string;
  totalLabel: string;
  totalValue: string;
  nextDisabled?: boolean;
  onNext?: () => void;
};

const StickyBottomBar = ({
  label,
  totalLabel,
  totalValue,
  nextDisabled,
  onNext,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.toggle}>{label}</Text>
        <Icon name="chevron-down" size={18} color="#555" />
      </View>
      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.totalLabel}>{totalLabel}</Text>
          <Text style={styles.totalValue}>{totalValue}</Text>
        </View>
        <TouchableOpacity
          style={[styles.primaryBtn, nextDisabled && { opacity: 0.5 }]}
          disabled={nextDisabled}
          onPress={onNext}
        >
          <Text style={styles.primaryBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggle: { fontSize: 12, color: '#333' },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  totalLabel: { fontSize: 10, color: '#666' },
  totalValue: { fontSize: 16, color: '#ef4444', fontWeight: '900' },
  primaryBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});

export default StickyBottomBar;
