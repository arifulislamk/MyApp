import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../components/CustomButton';
import AddDeedScreen from './AddDeedScreen';

function HomeScreen() {
  const [showAddDeed, setShowAddDeed] = useState(false);

  // Button press করলে Add Deed screen দেখাবে
  if (showAddDeed) {
    return <AddDeedScreen />;
  }

  return (
    <View style={styles.container}>

      <Text style={styles.greeting}>
        Hello, Robin 👋
      </Text>

      <Text style={styles.title}>
        Welcome to GoodDeeds
      </Text>

      <Text style={styles.subtitle}>
        Make small actions that create a big impact 💛
      </Text>

      <CustomButton
        title="Add Deed"
        onPress={() => setShowAddDeed(true)}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  greeting: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F59E0B',
  },

  subtitle: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});


export default HomeScreen;