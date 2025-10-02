import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  label?: string;
  onPress?: () => void;
};

const Back = ({ label = 'Back', onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Icon name="chevron-left" size={22} color="#333" />
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  text: { marginLeft: 2, fontSize: 13, color: '#111', fontWeight: '700' },
});

export default Back;
