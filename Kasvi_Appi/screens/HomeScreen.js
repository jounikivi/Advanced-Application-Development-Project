import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const plants = []; // Esimerkkinä kasvien lista, voit käyttää tilanhallintaa myöhemmin

  return (
    <View style={styles.container}>
      <Text>Kasvilista</Text>
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Lisää kasvi" onPress={() => navigation.navigate('AddPlant')} />
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

export default HomeScreen;
