import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PlantCard = ({ plant }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: plant.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{plant.name}</Text>
        <Text style={styles.details}>Lajike: {plant.species}</Text>
        <Text style={styles.details}>Seuraava kastelu: {plant.nextWatering}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});

export default PlantCard;
