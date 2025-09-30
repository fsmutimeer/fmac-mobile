
import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import Header from './src/components/Header';
import BottomTabs from './src/components/BottomTabs';
import HomeScreen from './src/screens/HomeScreen';
import LiveScreen from './src/screens/LiveScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ResultsScreen from './src/screens/ResultsScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [activeScreen, setActiveScreen] = useState('Home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Live':
        return <LiveScreen />;
      case 'Schedule':
        return <ScheduleScreen />;
      case 'Results':
        return <ResultsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Header />
        <View style={styles.mainContent}>{renderScreen()}</View>
        <BottomTabs activeScreen={activeScreen} onTabPress={setActiveScreen} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});

export default App;
