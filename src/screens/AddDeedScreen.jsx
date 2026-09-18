import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function AddDeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add New Deed ✨
      </Text>

      <Text style={styles.subtitle}>
        Share your good action with the community.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
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

export default AddDeedScreen;