import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SubHeading = {
  title: string;
  filter: boolean;
};

const SubHeaderHeading = ({ title, filter }: SubHeading) => {
  return (
    <View style={styles.subHeadingWrapper}>
      <Text style={styles.subHeadingTitle}>{title}</Text>
      {filter && <Icon name="filter" size={30} color="grey" />}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeadingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderTopColor: '#eee',
  },
  subHeadingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
});

export default SubHeaderHeading;
