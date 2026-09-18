import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function CustomButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;