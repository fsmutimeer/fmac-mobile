
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { articles, sponsors } from '../data';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sponsorsContainer}>
        <Text style={styles.sponsorsTitle}>Our Sponsors</Text>
        <FlatList
          data={sponsors}
          renderItem={({ item }) => (
            <View style={styles.sponsorItem}>
              <Image source={{ uri: item.logo }} style={styles.sponsorLogo} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <View style={styles.articleItem}>
            <Image source={{ uri: item.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDate}>{item.date}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    padding: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  sponsorLogo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  articleItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  articleImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  articleContent: {
    flex: 1,
    justifyContent: 'center',
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleDate: {
    marginTop: 4,
    color: '#888',
  },
});

export default HomeScreen;
