import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TeamCard from '../components/teams/TeamCard';
import TeamDetailsScreen from './TeamDetailsScreen';
import AthletesScreen from './AthletesScreen';
import { teams } from '../data';

type Screen = 'list' | 'teamDetails' | 'athletes';

type Props = {
  onBack?: () => void;
};

const TeamAndAthletesScreen = ({ onBack }: Props) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('list');
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTeamPress = (team: (typeof teams)[0]) => {
    setSelectedTeam(team);
    setCurrentScreen('teamDetails');
  };

  const handleBackToList = () => {
    if (currentScreen === 'list') {
      onBack?.();
    } else {
      setCurrentScreen('list');
    }
  };

  const handleBackToDetails = () => {
    setCurrentScreen('teamDetails');
  };

  const handleAthletesPress = () => {
    setCurrentScreen('athletes');
  };

  if (currentScreen === 'teamDetails') {
    return <TeamDetailsScreen team={selectedTeam} onBack={handleBackToList} />;
  }

  if (currentScreen === 'athletes') {
    return <AthletesScreen onBack={handleBackToList} />;
  }

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Icon name="account-group" size={20} color="#ef4444" />
          <Text style={[styles.navText, styles.activeNavText]}>
            Team & Athletes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="scale" size={20} color="#666" />
          <Text style={styles.navText}>Random Weigh In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="format-list-bulleted" size={20} color="#666" />
          <Text style={styles.navText}>Draw List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="play-circle" size={20} color="#666" />
          <Text style={styles.navText}>Live Results</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="swap-horizontal" size={20} color="#666" />
          <Text style={styles.navText}>Moved Matches</Text>
        </TouchableOpacity>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Team & Athletes</Text>
        <TouchableOpacity onPress={handleAthletesPress}>
          <Icon name="magnify" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Teams"
          placeholderTextColor="#9ca3af"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon
          name="magnify"
          size={20}
          color="#9ca3af"
          style={styles.searchIcon}
        />
      </View>

      {/* Filter Dropdown */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterDropdown}>
          <Text style={styles.filterText}>All Teams</Text>
          <Icon name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Teams List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {teams.map(team => (
          <TeamCard
            key={team.id}
            team={team}
            onPress={() => handleTeamPress(team)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNav: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 6,
  },
  activeNavItem: {
    backgroundColor: '#fef2f2',
  },
  navText: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  activeNavText: {
    color: '#ef4444',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#111',
  },
  searchIcon: {
    marginLeft: 8,
  },
  filterContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  filterText: {
    fontSize: 14,
    color: '#111',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default TeamAndAthletesScreen;
