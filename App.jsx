import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import AddDeedScreen from './src/screens/AddDeedScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import BottomNavbar from './src/components/BottomNavbar';
import {DeedProvider} from './src/context/DeedContext';

function App() {
  const [activeScreen, setActiveScreen] = useState('Home');

  const renderScreen = () => {
    if (activeScreen === 'Add') {
      return (
        <AddDeedScreen
          onChangeScreen={setActiveScreen}
        />
      );
    }

    if (activeScreen === 'Community') {
      return <CommunityScreen />;
    }

    if (activeScreen === 'Profile') {
      return <ProfileScreen />;
    }

    return (
      <HomeScreen
        onChangeScreen={setActiveScreen}
      />
    );
  };

  return (
    <DeedProvider>
      <View style={styles.container}>

        <View style={styles.content}>
          {renderScreen()}
        </View>

        <BottomNavbar
          activeScreen={activeScreen}
          onChangeScreen={setActiveScreen}
        />

      </View>
    </DeedProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
  },

  content: {
    flex: 1,
  },
});

export default App;