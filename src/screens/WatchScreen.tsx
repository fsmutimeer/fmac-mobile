import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QuickActions from '../components/QuickActions';
import SubHeaderHeading from '../components/SubHeading';

const { width } = Dimensions.get('window');

type Stream = {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  live?: boolean;
};

const mockStreams: Stream[] = [
  {
    id: '1',
    title: 'Live Court 01',
    subtitle: 'Ultimate Open Championship',
    thumbnail: 'https://picsum.photos/seed/v1/600/400',
    live: true,
  },
  {
    id: '2',
    title: 'Live Court 01',
    subtitle: 'Ultimate Open Championship',
    thumbnail: 'https://picsum.photos/seed/v2/600/400',
    live: true,
  },
  {
    id: '3',
    title: 'Live Court 01',
    subtitle: 'Ultimate Open Championship',
    thumbnail: 'https://picsum.photos/seed/v3/600/400',
  },
  {
    id: '4',
    title: 'Live Court 01',
    subtitle: 'Ultimate Open Championship',
    thumbnail: 'https://picsum.photos/seed/v4/600/400',
  },
];

const CARD_GAP = 14;
const CARD_WIDTH = (width - 16 * 2 - CARD_GAP) / 2;

const WatchScreen = () => {
  return (
    <View style={styles.container}>
      <QuickActions />
      <SubHeaderHeading title="Watch" filter={true} />
      <FlatList
        data={mockStreams}
        keyExtractor={i => i.id}
        numColumns={2}
        columnWrapperStyle={{ gap: CARD_GAP, paddingHorizontal: 16 }}
        contentContainerStyle={{
          paddingBottom: 24,
          paddingTop: 4,
          rowGap: CARD_GAP,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            <View style={styles.thumbWrap}>
              <Image source={{ uri: item.thumbnail }} style={styles.thumb} />
              <View style={styles.playCircle}>
                <Icon name="play" size={22} color="#555" />
              </View>
              {item.live && (
                <View style={styles.liveBadge}>
                  <View style={styles.dot} />
                  <Text style={styles.liveText}>LIVE</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  card: { width: CARD_WIDTH },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  cardSubtitle: { fontSize: 12, color: '#666', marginBottom: 8 },
  thumbWrap: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: { ...StyleSheet.absoluteFillObject, resizeMode: 'cover' },
  playCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffffcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ef4444',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
    marginRight: 4,
  },
  liveText: { color: '#fff', fontSize: 11, fontWeight: '700' },
});

export default WatchScreen;
