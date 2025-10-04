import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  athlete: {
    id: string;
    name: string;
    weight: string;
    category: string;
    event: string;
    rank: number;
    seed: number;
    rounds: {
      R256?: number;
      R128?: number;
      R64?: number;
      R32?: number;
      R16?: number;
      QF?: number;
      SF?: number;
      F?: number;
    };
  };
};

const AthleteCard = ({ athlete }: Props) => {
  const roundKeys = [
    'R256',
    'R128',
    'R64',
    'R32',
    'R16',
    'QF',
    'SF',
    'F',
  ] as const;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/athlete/40/40' }}
          style={styles.profileImage}
        />
        <View style={styles.athleteInfo}>
          <Text style={styles.name}>{athlete.name}</Text>
          <View style={styles.rankInfo}>
            <Text style={styles.rank}>
              Rank: {athlete.rank.toString().padStart(2, '0')}
            </Text>
            <Text style={styles.seed}>
              Seed: {athlete.seed.toString().padStart(2, '0')}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>ID</Text>
          <Text style={styles.value}>{athlete.weight}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>WT</Text>
          <Text style={styles.value}>{athlete.weight}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Cat.</Text>
          <Text style={styles.value}>{athlete.category}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Event</Text>
          <Text style={styles.value}>{athlete.event}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Rank</Text>
          <Text style={styles.value}>
            Rank: {athlete.rank.toString().padStart(2, '0')}
          </Text>
        </View>
      </View>

      <View style={styles.rounds}>
        {roundKeys.map(round => {
          const value = athlete.rounds[round];
          if (!value) return null;

          return (
            <View key={round} style={styles.roundItem}>
              <Text style={styles.roundLabel}>{round}:</Text>
              <Text style={styles.roundValue}>{value}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  header: {
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
  athleteInfo: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  rankInfo: {
    flexDirection: 'row',
    gap: 8,
  },
  rank: {
    fontSize: 11,
    color: '#666',
  },
  seed: {
    fontSize: 11,
    color: '#666',
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  detailRow: {
    width: '50%',
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
    color: '#666',
    fontWeight: '600',
  },
  value: {
    fontSize: 11,
    color: '#111',
  },
  rounds: {
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
  },
  roundLabel: {
    fontSize: 10,
    color: '#666',
    fontWeight: '600',
    marginRight: 2,
  },
  roundValue: {
    fontSize: 10,
    color: '#111',
    fontWeight: '600',
  },
});

export default AthleteCard;
