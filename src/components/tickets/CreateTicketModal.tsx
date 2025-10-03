import React from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TicketEvent } from '../../data';

export type CreateMode = {
  kind: 'adult' | 'child';
  qty: number;
  selectedDayIds: Set<string>;
};

type Props = {
  visible: boolean;
  event: TicketEvent | null;
  mode: CreateMode | null;
  setMode: (
    m: CreateMode | null | ((m: CreateMode | null) => CreateMode | null),
  ) => void;
  onCommit: () => void;
};

const CreateTicketModal = ({
  visible,
  event,
  mode,
  setMode,
  onCommit,
}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={() => setMode(null)}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setMode(null)}
        style={styles.backdrop}
      >
        <TouchableOpacity activeOpacity={1} style={styles.card}>
          {mode && (
            <View>
              <Text style={styles.title}>Add {mode.kind} ticket</Text>
              <Text style={styles.eventName}>{event?.name}</Text>
              <View style={styles.eventMeta}>
                <View>
                  <Text style={styles.modeTitle}>{mode?.kind} ticket</Text>
                  <Text style={styles.sub}>
                    $5 USD per ticket (including TAX)
                  </Text>
                </View>

                <View style={styles.qtyRow}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() =>
                      setMode(m =>
                        m ? { ...m, qty: Math.max(1, m.qty - 1) } : m,
                      )
                    }
                  >
                    <Icon name="minus" size={16} color="#fff" />
                  </TouchableOpacity>
                  <Text style={styles.qtyVal}>{mode.qty}</Text>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() =>
                      setMode(m => (m ? { ...m, qty: m.qty + 1 } : m))
                    }
                  >
                    <Icon name="plus" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.daysLabel}>
                Please tap on the day to select
              </Text>
              <Text style={styles.daysPrice}>
                <Text style={styles.daysPriceText}>Select Days</Text> $5 per day
                (including TAX)
              </Text>
              <View style={{ marginTop: 6 }}>
                {event?.days.map(d => {
                  const selected = mode.selectedDayIds.has(d.id);
                  return (
                    <TouchableOpacity
                      key={d.id}
                      style={[styles.dayRow, selected && styles.dayRowSelected]}
                      onPress={() =>
                        setMode(m => {
                          if (!m) return m;
                          const s = new Set(m.selectedDayIds);
                          s.has(d.id) ? s.delete(d.id) : s.add(d.id);
                          return { ...m, selectedDayIds: s };
                        })
                      }
                    >
                      <Text
                        style={[
                          styles.dayLabel,
                          selected && styles.dayLabelSelected,
                        ]}
                      >
                        {d.label}
                      </Text>
                      <Text
                        style={[
                          styles.dayDate,
                          selected && styles.dayDateSelected,
                        ]}
                      >
                        {d.date} - {d.weekday}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={styles.footerRow}>
                <View
                  style={{
                    gap: 12,
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 2,
                  }}
                >
                  <View style={{}}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalTicketa}>{mode.qty} tickets</Text>
                  </View>
                  <View>
                    <Text style={styles.totalValue}>
                      $
                      {(
                        mode.qty *
                        5 *
                        Math.max(1, mode.selectedDayIds.size)
                      ).toFixed(2)}
                    </Text>
                    <Text style={styles.totalTicketDays}>
                      {mode.selectedDayIds.size} days
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.primaryBtn} onPress={onCommit}>
                  <Text style={styles.primaryBtnText}>Add ticket</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  title: { fontSize: 18, fontWeight: '800', color: '#111' },
  eventMeta: {
    // backgroundColor: '#F3F4F7',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',

    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  modeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    textTransform: 'capitalize',
  },
  eventName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',

    paddingBottom: 4,
    marginBottom: 4,
    marginTop: 4,
  },
  sub: { fontSize: 10, color: '#ef4444', marginTop: 2 },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 10,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  qtyVal: { fontSize: 16, fontWeight: '800', color: '#111' },
  daysLabel: { fontSize: 12, color: '#444', marginTop: 12 },
  daysPrice: { fontSize: 10, color: '#ef4444', marginTop: 2 },
  daysPriceText: { fontSize: 10, color: '#111', fontWeight: '600' },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 6,
  },
  dayRowSelected: { backgroundColor: '#B91C1C' },
  dayLabel: { fontSize: 12, color: '#111', fontWeight: '800' },
  dayLabelSelected: { color: '#fff' },
  dayDate: { fontSize: 11, color: '#666' },
  dayDateSelected: { color: '#fff' },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  totalLabel: { fontSize: 16, color: '#ef4444', fontWeight: '600' },
  totalTicketa: { fontSize: 12, color: '#ef4444', fontWeight: '400' },
  totalTicketDays: { fontSize: 12, color: '#ef4444', fontWeight: '400' },
  totalValue: { fontSize: 16, color: '#ef4444', fontWeight: '600' },
  primaryBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});

export default CreateTicketModal;
