import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './src/components/Header';
import BottomTabs from './src/components/BottomTabs';
import HomeScreen from './src/screens/HomeScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import WatchScreen from './src/screens/WatchScreen';
import TicketsScreen from './src/screens/TicketsScreen';
import TeamAndAthletesScreen from './src/screens/TeamAndAthletesScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import { articles } from './src/data';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [activeScreen, setActiveScreen] = useState('Home');
  const [articleIndex, setArticleIndex] = useState<number | null>(null);
  const [showTeams, setShowTeams] = useState(false);

  const handleTabPress = (tab: string) => {
    if (showTeams) {
      // If Teams overlay is active, close it and switch to the selected tab
      setShowTeams(false);
    }
    setActiveScreen(tab);
  };

  const renderScreen = () => {
    if (showTeams) {
      return <TeamAndAthletesScreen onBack={() => setShowTeams(false)} />;
    }

    switch (activeScreen) {
      case 'Home':
        return (
          <HomeScreen
            onOpenArticle={(id: number) => {
              const idx = articles.findIndex(a => a.id === id);
              setArticleIndex(idx < 0 ? 0 : idx);
              setActiveScreen('Article');
            }}
            onOpenTeams={() => setShowTeams(true)}
          />
        );
      case 'Schedule':
        return <ScheduleScreen onOpenTeams={() => setShowTeams(true)} />;
      case 'Results':
        return <ResultsScreen onOpenTeams={() => setShowTeams(true)} />;
      case 'Watch':
        return <WatchScreen onOpenTeams={() => setShowTeams(true)} />;
      case 'Tickets':
        return <TicketsScreen onOpenTeams={() => setShowTeams(true)} />;
      case 'Article':
        return (
          <ArticleScreen
            index={articleIndex ?? 0}
            onBackToHome={() => setActiveScreen('Home')}
            onNavigateIndex={(nextIndex: number) => setArticleIndex(nextIndex)}
          />
        );
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
        <BottomTabs activeScreen={activeScreen} onTabPress={handleTabPress} />
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
