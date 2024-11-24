import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import PlantCard from '../components/PlantCard';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  const { plants } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantCard plant={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <CustomButton title="Lisää kasvi" onPress={() => navigation.navigate('AddPlant')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
