import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from '../components/Back';
import TabNavigation from '../components/teams/TabNavigation';
import AthleteCard from '../components/teams/AthleteCard';
import OfficialCard from '../components/teams/OfficialCard';
import { Team } from '../../data';

type Props = {
  team: Team;
  onBack: () => void;
};

const TeamDetailsScreen = ({ team, onBack }: Props) => {
  const [activeTab, setActiveTab] = useState<'athletes' | 'officials'>(
    'athletes',
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAthletes = team.athletes.filter(athlete =>
    athlete.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredOfficials = team.officials.filter(official =>
    official.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Back onPress={onBack} />

      {/* Team Header */}
      <View style={styles.teamHeader}>
        <View style={styles.flag}>
          <Text style={styles.flagText}>{team.countryCode}</Text>
        </View>
        <View style={styles.teamInfo}>
          <Text style={styles.teamNumber}>
            {team.teamNumber} | {team.countryCode} | {team.countryName}
          </Text>
          <Text style={styles.teamName}>{team.fullName}</Text>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={
            activeTab === 'athletes' ? 'Search Athletes' : 'Search Officials'
          }
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

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'athletes' ? (
          <>
            {/* Athletes Header */}
            <View style={styles.listHeader}>
              <Text style={styles.headerText}>ID</Text>
              <Text style={styles.headerText}>WT</Text>
              <Text style={styles.headerText}>Cat.</Text>
              <Text style={styles.headerText}>Event</Text>
              <Text style={styles.headerText}>Rank</Text>
            </View>

            {/* Athletes List */}
            {filteredAthletes.map(athlete => (
              <AthleteCard key={athlete.id} athlete={athlete} />
            ))}
          </>
        ) : (
          <>
            {/* Officials Header */}
            <View style={styles.listHeader}>
              <Text style={styles.headerText}>Name</Text>
              <Text style={styles.headerText}>ID</Text>
              <Text style={styles.headerText}>WT</Text>
              <Text style={styles.headerText}>Function</Text>
            </View>

            {/* Officials List */}
            {filteredOfficials.map(official => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  teamHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  flag: {
    width: 32,
    height: 20,
    backgroundColor: '#ef4444',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  flagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
  teamInfo: {
    flex: 1,
  },
  teamNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    marginBottom: 2,
  },
  teamName: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  tabContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    marginHorizontal: 16,
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
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listHeader: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  headerText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
});

export default TeamDetailsScreen;
