import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabs = ({ activeScreen, onTabPress }: any) => {
  const tabs = ['Home', 'Schedule', 'Results', 'Watch', 'Tickets'];

  const tabIcon = (tab: string) => {
    switch (tab) {
      case 'Home':
        return 'home-outline';
      case 'Schedule':
        return 'calendar-blank-outline';
      case 'Results':
        return 'trophy-outline';
      case 'Watch':
        return 'play-circle-outline';
      case 'Tickets':
        return 'ticket-confirmation-outline';
      default:
        return 'circle';
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeScreen === tab && styles.activeTab]}
          onPress={() => onTabPress(tab)}
        >
          <Icon
            name={tabIcon(tab)}
            size={22}
            color={activeScreen === tab ? '#000' : '#777'}
          />
          <Text
            style={[
              styles.tabText,
              activeScreen === tab && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  activeTab: {
    backgroundColor: '#ddd',
  },
  tabText: {
    fontSize: 12,
  },
  activeTabText: {
    fontWeight: 'bold',
  },
});

export default BottomTabs;
