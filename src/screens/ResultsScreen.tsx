import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { resultsSections } from '../data';
import QuickActions from '../components/QuickActions';
import SubHeaderHeading from '../components/SubHeading';

type ResultItem = {
  id: string;
  time: string;
  title: string;
};

type ResultSection = {
  dateKey: string;
  dayNum: string;
  dayName: string;
  data: ResultItem[];
};

const ResultsScreen = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const sections = useMemo<ResultSection[]>(
    () => resultsSections as unknown as ResultSection[],
    [],
  );

  const toggleSection = (key: string) =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  const renderSectionHeader = ({ section }: { section: ResultSection }) => {
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
    item: ResultItem;
    section: ResultSection;
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
        <TouchableOpacity style={styles.downloadBtn}>
          <Icon name="download" size={14} color="#6B7280" />
          <Text style={styles.downloadText}>Download PDF</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = ({ section }: { section: ResultSection }) => {
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
      <SubHeaderHeading title="Result" filter={true} />
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
  downloadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginLeft: 10,
  },
  downloadText: {
    marginLeft: 4,
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
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

export default ResultsScreen;
