import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { articles, sponsors, carouselImages } from '../data';
import QuickActions from '../components/QuickActions';

const DOT_SIZE = 6;
const { width } = Dimensions.get('window');

type HomeScreenProps = { onOpenArticle?: (id: number) => void };

const HomeScreen = ({ onOpenArticle }: HomeScreenProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(width);
  const carouselRef = useRef<any>(null);
  const slideIndexRef = useRef(0);

  // Auto-scroll carousel at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (slideIndexRef.current + 1) % carouselImages.length;
      slideIndexRef.current = next;
      carouselRef.current?.scrollTo({
        x: next * carouselWidth,
        animated: true,
      });
      setActiveSlide(next);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselWidth]);

  return (
    <View style={styles.container}>
      {/* Top quick actions */}
      <QuickActions />

      {/* Carousel */}
      <View
        style={styles.carouselWrapper}
        onLayout={e => setCarouselWidth(e.nativeEvent.layout.width)}
      >
        <ScrollView
          ref={carouselRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const idx = Math.round(
              e.nativeEvent.contentOffset.x / carouselWidth,
            );
            if (idx !== activeSlide) {
              slideIndexRef.current = idx;
              setActiveSlide(idx);
            }
          }}
          scrollEventThrottle={16}
        >
          {carouselImages.map((uri, i) => (
            <View
              key={i}
              style={[styles.carouselSlide, { width: carouselWidth }]}
            >
              <Image source={{ uri }} style={styles.carouselImage} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.dotsRow}>
          {carouselImages.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, activeSlide === i ? styles.dotActive : null]}
            />
          ))}
        </View>
      </View>

      {/* Sponsors */}
      <View style={styles.sponsorsContainer}>
        <Text style={styles.sponsorsTitle}>Our Sponsors</Text>
        <FlatList
          data={sponsors}
          renderItem={({ item }) => (
            <View style={styles.sponsorItem}>
              <Image source={{ uri: item.logo }} style={styles.sponsorLogo} />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* Articles list */}
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.articleItem}
            onPress={() => onOpenArticle?.(item.id)}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <View style={styles.dateRow}>
                <Icon name="calendar" size={18} color="#9A9A9A" />
                <Text style={styles.articleDate}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },

  carouselWrapper: {
    marginTop: 8,
    marginBottom: 12,
  },
  carouselSlide: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  dotsRow: {
    position: 'absolute',
    bottom: 6,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#d0d0d0',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: '#999',
  },
  sponsorsContainer: {
    marginBottom: 16,
  },
  sponsorsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sponsorItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  sponsorLogo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  articleItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  articleImage: {
    width: 100,
    height: 64,
    borderRadius: 4,
    marginRight: 16,
  },
  articleContent: {
    flex: 1,
    justifyContent: 'center',
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  articleDate: {
    color: '#9A9A9A',
    fontSize: 12,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
});

export default HomeScreen;
