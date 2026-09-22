import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {DeedContext} from '../context/DeedContext';

function AddDeedScreen({onChangeScreen}) {
  const [deed, setDeed] = useState('');

  const {addDeed} = useContext(DeedContext);

  const saveDeed = () => {
    if (deed.trim() === '') {
      return;
    }

    addDeed(deed.trim());
    setDeed('');

    onChangeScreen('Home');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>✨</Text>

      <Text style={styles.title}>
        Add a Good Deed
      </Text>

      <Text style={styles.subtitle}>
        What good thing did you do today?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Write your good deed..."
        placeholderTextColor="#AAAAAA"
        value={deed}
        onChangeText={setDeed}
        multiline
        textAlignVertical="top"
      />

      <TouchableOpacity
        style={styles.saveButton}
        activeOpacity={0.8}
        onPress={saveDeed}>

        <Text style={styles.saveButtonText}>
          Save Deed ✓
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EC',
    padding: 20,
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 42,
    textAlign: 'center',
  },

  title: {
    marginTop: 12,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: '#222222',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    textAlign: 'center',
    color: '#777777',
  },

  input: {
    height: 150,
    marginTop: 28,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  saveButton: {
    height: 58,
    marginTop: 18,
    borderRadius: 18,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default AddDeedScreen;