import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  activeTab: 'athletes' | 'officials';
  onTabChange: (tab: 'athletes' | 'officials') => void;
};

const TabNavigation = ({ activeTab, onTabChange }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'athletes' && styles.activeTab]}
        onPress={() => onTabChange('athletes')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'athletes' && styles.activeTabText,
          ]}
        >
          Athletes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'officials' && styles.activeTab]}
        onPress={() => onTabChange('officials')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'officials' && styles.activeTabText,
          ]}
        >
          Officials
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#ef4444',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
});

export default TabNavigation;
