import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../components/CustomButton';
import AddDeedScreen from './AddDeedScreen';
import {DeedContext} from '../context/DeedContext';


function HomeScreen() {

  const [showAddDeed, setShowAddDeed] = useState(false);

  const {deeds} = useContext(DeedContext);


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


      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Recent Deeds 🌱
        </Text>


        {deeds.length === 0 ? (

          <Text style={styles.deed}>
            No deeds yet. Add your first good deed!
          </Text>

        ) : (

          deeds.map((item) => (
            <Text
              key={item.id}
              style={styles.deed}
            >
              ✓ {item.text}
            </Text>
          ))

        )}

      </View>


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
  },


  title: {
    marginTop: 10,
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


  card: {
    width: '90%',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },


  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F59E0B',
  },


  deed: {
    marginTop: 12,
    fontSize: 16,
    color: '#555',
  },

});


export default HomeScreen;