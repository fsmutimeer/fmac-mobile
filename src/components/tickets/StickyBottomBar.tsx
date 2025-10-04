import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  label: string;
  totalTickets?: number;
  totalLabel: string;
  totalValue: string;
  nextDisabled?: boolean;
  onNext?: () => void;
  expanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  hideToggle?: boolean;
  nextLabel?: string;
  fullWidthButton?: boolean;
  hideTotal?: boolean;
};

const StickyBottomBar = ({
  label,
  totalTickets = 0,
  totalLabel,
  totalValue,
  nextDisabled,
  onNext,
  expanded = false,
  onToggle,
  children,
  hideToggle = false,
  nextLabel = 'Next',
  fullWidthButton = false,
  hideTotal = false,
}: Props) => {
  return (
    <View style={styles.container}>
      {hideToggle ? (
        <View style={styles.row}>
          <Text style={styles.toggle}>{label}</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.row}
          activeOpacity={0.8}
          onPress={onToggle}
        >
          <Text style={styles.toggle}>{label}</Text>
          <Icon
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={18}
            color="#555"
          />
        </TouchableOpacity>
      )}

      {expanded && <View style={styles.expandArea}>{children}</View>}
      <View
        style={[styles.bottomRow, fullWidthButton && { alignItems: 'stretch' }]}
      >
        {!hideTotal && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{ display: 'flex' }}>
              <Text style={styles.totalLabel}>{totalLabel}</Text>
              <Text style={styles.totalTickets}>{totalTickets} tickets</Text>
            </View>
            <Text style={styles.totalValue}>{totalValue}</Text>
          </View>
        )}
        <TouchableOpacity
          style={[
            styles.primaryBtn,
            fullWidthButton && styles.primaryBtnFull,
            nextDisabled && { opacity: 0.5 },
          ]}
          disabled={nextDisabled}
          onPress={onNext}
        >
          <Text style={styles.primaryBtnText}>{nextLabel}</Text>
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
    // backgroundColor: '#fff',
    backgroundColor: '#F3F4F6',
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
  expandArea: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 12,
    // backgroundColor: '#fff',
  },
  toggle: { fontSize: 12, color: '#333' },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  totalLabel: { fontSize: 16, color: '#ef4444', fontWeight: '600' },
  totalTickets: { fontSize: 12, color: '#ef4444', fontWeight: '600' },
  totalValue: { fontSize: 16, color: '#ef4444', fontWeight: '600' },
  primaryBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryBtnFull: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default StickyBottomBar;
