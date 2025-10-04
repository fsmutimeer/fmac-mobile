import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from '../components/Back';
import AthleteCard from '../components/teams/AthleteCard';
import FilterDropdown from '../components/teams/FilterDropdown';
import {
  allAthletes,
  genderOptions,
  weightDivisionOptions,
  teams,
} from '../data';

type Props = {
  onBack: () => void;
};

const AthletesScreen = ({ onBack }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedWeightDivision, setSelectedWeightDivision] = useState('All');

  const filteredAthletes = useMemo(() => {
    return allAthletes.filter(athlete => {
      const matchesSearch = athlete.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGender =
        selectedGender === 'All' ||
        (selectedGender === 'Male' && athlete.event.startsWith('Men-')) ||
        (selectedGender === 'Female' && athlete.event.startsWith('Women-'));
      const matchesWeight =
        selectedWeightDivision === 'All' ||
        athlete.event === selectedWeightDivision;

      return matchesSearch && matchesGender && matchesWeight;
    });
  }, [searchQuery, selectedGender, selectedWeightDivision]);

  const getTeamInfo = (teamId: string) => {
    return teams.find(team => team.id === teamId);
  };

  return (
    <View style={styles.container}>
      <Back onPress={onBack} />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Athletes"
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

      {/* Filter Dropdowns */}
      <View style={styles.filtersContainer}>
        <FilterDropdown
          label="Gender"
          options={genderOptions}
          selectedValue={selectedGender}
          onValueChange={setSelectedGender}
        />
        <FilterDropdown
          label="Weight Division"
          options={weightDivisionOptions}
          selectedValue={selectedWeightDivision}
          onValueChange={setSelectedWeightDivision}
        />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Athletes Header */}
        <View style={styles.listHeader}>
          <Text style={styles.headerText}>ID</Text>
          <Text style={styles.headerText}>WT</Text>
          <Text style={styles.headerText}>Cat.</Text>
          <Text style={styles.headerText}>Event</Text>
          <Text style={styles.headerText}>Rank</Text>
        </View>

        {/* Athletes List */}
        {filteredAthletes.map(athlete => {
          const team = getTeamInfo(athlete.teamId);
          return (
            <View key={athlete.id} style={styles.athleteContainer}>
              {/* Profile Row */}
              <View style={styles.profileRow}>
                <Image
                  source={{ uri: 'https://picsum.photos/seed/athlete/40/40' }}
                  style={styles.profileImage}
                />
                <Text style={styles.athleteName}>{athlete.name}</Text>
                <View style={styles.countryFlag}>
                  <Text style={styles.flagText}>{athlete.countryCode}</Text>
                </View>
                <Text style={styles.countryInfo}>
                  {team?.teamNumber} | {athlete.countryCode} |{' '}
                  {athlete.countryName}
                </Text>
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>
                    Rank: {athlete.rank.toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>

              {/* Team Info */}
              <Text style={styles.teamName}>{team?.fullName}</Text>

              {/* Details Row */}
              <View style={styles.detailsRow}>
                <Text style={styles.detailText}>9809</Text>
                <Text style={styles.detailText}>{athlete.weight}</Text>
                <Text style={styles.detailText}>{athlete.category}</Text>
                <Text style={styles.detailText}>{athlete.event}</Text>
                <Text style={styles.detailText}>
                  Seed: {athlete.seed.toString().padStart(2, '0')}
                </Text>
              </View>

              {/* Rounds Row */}
              <View style={styles.roundsRow}>
                {Object.entries(athlete.rounds).map(([round, value]) => (
                  <View key={round} style={styles.roundItem}>
                    <Text style={styles.roundText}>
                      {round}: {value}
                    </Text>
                    {round === 'SF' && (
                      <Icon name="medal" size={12} color="#cd7f32" />
                    )}
                    {round === 'F' && (
                      <Icon name="medal" size={12} color="#ffd700" />
                    )}
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
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
  athleteContainer: {
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  athleteName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
    flex: 1,
  },
  countryFlag: {
    width: 20,
    height: 12,
    backgroundColor: '#ef4444',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  flagText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#fff',
  },
  countryInfo: {
    fontSize: 11,
    color: '#666',
    marginRight: 8,
  },
  rankBadge: {
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  rankText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  teamName: {
    fontSize: 11,
    color: '#666',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 11,
    color: '#111',
    flex: 1,
  },
  roundsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  roundItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 4,
  },
  roundText: {
    fontSize: 10,
    color: '#111',
    fontWeight: '600',
  },
});

export default AthletesScreen;
