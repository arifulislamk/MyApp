import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile 👤</Text>

      <Text style={styles.subtitle}>
        Your GoodDeeds profile
      </Text>
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

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F59E0B',
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#555',
  },
});

export default ProfileScreen;