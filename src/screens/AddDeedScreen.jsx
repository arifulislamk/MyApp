import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import {DeedContext} from '../context/DeedContext';


function AddDeedScreen() {

  const [deed, setDeed] = useState('');

  const {addDeed} = useContext(DeedContext);


  const saveDeed = () => {

    if (deed.trim() === '') {
      return;
    }

    addDeed(deed);

    setDeed('');
  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Add New Deed ✨
      </Text>


      <Text style={styles.subtitle}>
        What good thing did you do today?
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Write your deed here..."
        value={deed}
        onChangeText={setDeed}
        multiline
      />


      <CustomButton
        title="Save Deed"
        onPress={saveDeed}
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


  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F59E0B',
  },


  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },


  input: {
    width: '90%',
    height: 120,
    marginTop: 25,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
    fontSize: 16,
  },

});


export default AddDeedScreen;