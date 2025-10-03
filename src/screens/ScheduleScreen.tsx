import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scheduleSections, DaySection } from '../data';
import QuickActions from '../components/QuickActions';

type ScheduleItem = {
  id: string;
  time: string;
  title: string;
};

type ScheduleSection = {
  dateKey: string; // e.g. 2024-10-16
  dayNum: string; // e.g. "16"
  dayName: string; // e.g. "Monday"
  data: ScheduleItem[];
};

const ScheduleScreen = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const sections = useMemo<ScheduleSection[]>(
    () => scheduleSections as unknown as ScheduleSection[],
    [],
  );

  const toggleSection = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSectionHeader = ({ section }: { section: ScheduleSection }) => {
    const isOpen = expanded[section.dateKey] ?? true;
    return (
      <View style={styles.sectionHeaderWrap}>
        <View style={styles.sectionHeaderLeft}>
          <Text style={styles.dayNum}>{section.dayNum}</Text>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.monthText}>October 2024</Text>
            <Text style={styles.dayName}>{section.dayName}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => toggleSection(section.dateKey)}>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={22}
            color="#333"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({
    item,
    section,
  }: {
    item: ScheduleItem;
    section: ScheduleSection;
  }) => {
    const isOpen = expanded[section.dateKey] ?? true;
    if (!isOpen) return null;
    return (
      <View style={styles.card}>
        <View style={styles.timePill}>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <Text numberOfLines={2} style={styles.titleText}>
          {item.title}
        </Text>
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="map-marker-outline" size={14} color="#2B7A77" />
          <Text style={styles.actionText}>Get directions</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = ({ section }: { section: ScheduleSection }) => {
    const isOpen = expanded[section.dateKey] ?? true;
    if (!isOpen) return null;
    return (
      <View style={styles.emptyBox}>
        <Text style={styles.emptyText}>No Events</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <QuickActions />
      <View style={styles.screenWrapper}>
        <Text style={styles.screenTitle}>Schedule</Text>
        <Icon name="filter" size={30} color="grey" />
      </View>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        renderSectionFooter={renderEmpty as any}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  screenWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderTopColor: '#eee',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  sectionHeaderWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  sectionHeaderLeft: { flexDirection: 'row', alignItems: 'center' },
  dayNum: { fontSize: 22, fontWeight: '900', color: '#111' },
  dayName: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666',
    fontStyle: 'italic',
  },
  monthText: { fontSize: 12, fontWeight: '600', color: '#111', marginTop: 2 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  timePill: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#E2E6EA',
    marginRight: 10,
  },
  timeText: { fontSize: 13, fontWeight: '800', color: '#111' },
  titleText: { flex: 1, fontSize: 13, color: '#222' },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CFE2E1',
    marginLeft: 10,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 11,
    fontWeight: '600',
    color: '#2B7A77',
  },
  emptyBox: {
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  emptyText: { fontSize: 12, color: '#666' },
});

export default ScheduleScreen;
