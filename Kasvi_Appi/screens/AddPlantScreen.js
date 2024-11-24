import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AddPlantScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Lisää uusi kasvi</Text>
      <Button title="Takaisin etusivulle" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddPlantScreen;
