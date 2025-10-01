import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { headerLogos } from '../data';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../assets/images/org_logo.png')}
          style={styles.leftLogo}
        />
        <View style={styles.centerWrap}>
          <Image
            source={require('../assets/images/center_logo.png')}
            style={styles.centerLogo}
          />
        </View>
        <Icon name="menu" size={22} color="#333" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    position: 'relative',
  },
  leftLogo: { width: 90, height: 28, borderRadius: 6, resizeMode: 'contain' },
  centerWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  centerLogo: {
    width: 140,
    height: 30,
    borderRadius: 8,
    resizeMode: 'contain',
  },
});

export default Header;
