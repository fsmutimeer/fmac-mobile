import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  official: {
    id: string;
    name: string;
    weight: string;
    function: string;
  };
};

const OfficialCard = ({ official }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/official/40/40' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{official.name}</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{official.name}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>ID</Text>
          <Text style={styles.value}>{official.weight}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>WT</Text>
          <Text style={styles.value}>{official.weight}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Function</Text>
          <Text style={styles.value}>{official.function}</Text>
        </View>
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
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
});

export default OfficialCard;
