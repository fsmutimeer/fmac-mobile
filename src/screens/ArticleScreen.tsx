import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { articles } from '../data';

type ArticleScreenProps = {
  index?: number;
  onBackToHome?: () => void;
  onNavigateIndex: (nextIndex: number) => void;
};

const ArticleScreen = ({
  index = 0,
  onBackToHome,
  onNavigateIndex,
}: ArticleScreenProps) => {
  const article = articles[index];
  const canPrev = index > 0;
  const canNext = index < articles.length - 1;

  const handlePrev = () => {
    if (canPrev) onNavigateIndex(index - 1);
  };
  const handleNext = () => {
    if (canNext) onNavigateIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageHolder}>
          <Image
            source={{ uri: articles[index].image }}
            style={styles.heroImage}
          />
        </View>

        <View style={styles.navRow}>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={handlePrev}
            disabled={!canPrev}
          >
            <Icon
              name="chevron-left"
              size={18}
              color={canPrev ? '#333' : '#bbb'}
            />
            <Text style={[styles.navText, !canPrev && styles.navDisabled]}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={handleNext}
            disabled={!canNext}
          >
            <Text style={[styles.navText, !canNext && styles.navDisabled]}>
              Next
            </Text>
            <Icon
              name="chevron-right"
              size={18}
              color={canNext ? '#333' : '#bbb'}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{article.title}</Text>
        <View style={styles.dateRow}>
          <Icon name="calendar" size={18} color="#9A9A9A" />
          <Text style={styles.date}>{article.date}</Text>
        </View>
        <Text style={styles.body}>{article.body}</Text>
        <Text style={styles.body}>{article.body}</Text>
        <Text style={styles.body}>{article.body}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollBody: {
    padding: 16,
  },
  imageHolder: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  heroImage: {
    width: '100%',
    height: 170,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  navBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontWeight: '600',
    color: '#333',
  },
  navDisabled: {
    color: '#bbb',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#222',
    marginBottom: 6,
  },
  date: {
    color: '#9A9A9A',
    marginBottom: 2,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  body: {
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
});

export default ArticleScreen;
