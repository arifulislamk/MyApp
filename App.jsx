import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import AddDeedScreen from './src/screens/AddDeedScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import BottomNavbar from './src/components/BottomNavbar';
import { DeedProvider } from './src/context/DeedContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const [activeScreen, setActiveScreen] = useState('Home');

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (loggedInUser, loggedInToken) => {
    setUser(loggedInUser);
    setToken(loggedInToken);
    setIsLoggedIn(true);
    setShowRegister(false);
    setActiveScreen('Home');
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    setShowRegister(false);
    setActiveScreen('Home');
  };

  // =========================
  // REGISTER SCREEN
  // =========================

  if (!isLoggedIn && showRegister) {
    return <RegisterScreen onLogin={() => setShowRegister(false)} />;
  }

  // =========================
  // LOGIN SCREEN
  // =========================

  if (!isLoggedIn) {
    return (
      <LoginScreen
        onLogin={handleLogin}
        onRegister={() => setShowRegister(true)}
      />
    );
  }

  // =========================
  // MAIN SCREENS
  // =========================

  const renderScreen = () => {
    if (activeScreen === 'Add') {
      return <AddDeedScreen onChangeScreen={setActiveScreen} />;
    }

    if (activeScreen === 'Community') {
      return <CommunityScreen />;
    }

    if (activeScreen === 'Profile') {
      return <ProfileScreen user={user} onLogout={handleLogout} />;
    }

    return <HomeScreen onChangeScreen={setActiveScreen} user={user} />;
  };

  return (
    <DeedProvider user={user} token={token}>
      <View style={styles.container}>
        <View style={styles.content}>{renderScreen()}</View>

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
