import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {DeedContext} from '../context/DeedContext';

function AddDeedScreen({onChangeScreen}) {
  const [deed, setDeed] = useState('');
  const [saving, setSaving] = useState(false);

  const {addDeed} = useContext(DeedContext);

  const saveDeed = async () => {
    const trimmedDeed = deed.trim();

    if (trimmedDeed === '') {
      Alert.alert(
        'Empty Deed',
        'Please write something before saving.',
      );
      return;
    }

    try {
      setSaving(true);

      console.log('Saving deed:', trimmedDeed);

      const result = await addDeed(trimmedDeed);

      console.log('Deed saved successfully:', result);

      setDeed('');

      Alert.alert(
        'Success 🎉',
        'Your good deed has been saved!',
        [
          {
            text: 'OK',
            onPress: () => onChangeScreen('Home'),
          },
        ],
      );
    } catch (error) {
      console.error('Save deed error:', error);

      Alert.alert(
        'Save Deed Error',
        error?.message || String(error),
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>
        ✨
      </Text>

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
        editable={!saving}
      />

      <TouchableOpacity
        style={[
          styles.saveButton,
          saving && styles.disabledButton,
        ]}
        activeOpacity={0.8}
        onPress={saveDeed}
        disabled={saving}>

        <Text style={styles.saveButtonText}>
          {saving ? 'Saving...' : 'Save Deed ✓'}
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

  disabledButton: {
    opacity: 0.6,
  },

  saveButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default AddDeedScreen;