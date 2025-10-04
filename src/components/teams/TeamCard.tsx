import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  team: {
    id: string;
    teamNumber: string;
    countryCode: string;
    countryName: string;
    fullName: string;
    athletesCount: number;
    officialsCount: number;
  };
  onPress: () => void;
};

const TeamCard = ({ team, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.teamNumber}>{team.teamNumber}</Text>
        <View style={styles.countryInfo}>
          <View style={styles.flag}>
            <Text style={styles.flagText}>{team.countryCode}</Text>
          </View>
          <Text style={styles.countryName}>
            {team.countryCode} | {team.countryName}
          </Text>
        </View>
        <TouchableOpacity style={styles.favoriteBtn}>
          <Icon name="heart-outline" size={20} color="#ef4444" />
        </TouchableOpacity>
      </View>

      <Text style={styles.teamName} numberOfLines={2}>
        {team.fullName}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.summary}>
          Athletes: {team.athletesCount} Officials: {team.officialsCount}
          <Text style={styles.seeDetails}> See Details</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  teamNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
  },
  flag: {
    width: 24,
    height: 16,
    backgroundColor: '#ef4444',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  flagText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#fff',
  },
  countryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#444',
  },
  favoriteBtn: {
    padding: 4,
  },
  teamName: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summary: {
    fontSize: 11,
    color: '#666',
  },
  seeDetails: {
    color: '#ef4444',
    fontWeight: '600',
  },
});

export default TeamCard;
