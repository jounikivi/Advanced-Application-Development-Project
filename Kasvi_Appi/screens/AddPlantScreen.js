import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Expo yhteensopiva DateTimePicker
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { scheduleNotification } from '../services/notificationService';

const AddPlantScreen = ({ navigation }) => {
  const { addPlant } = useContext(AppContext);

  // Lomakkeen kenttien tilat
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [nextWatering, setNextWatering] = useState(new Date()); // Oletus: Nykyinen päivämäärä ja aika
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // Hallitsee päivämäärävalitsimen näkyvyyttä

  // Funktio kasvin lisäämiseen
  const handleAddPlant = async () => {
    // Tarkistetaan, että nimi ja lajike on syötetty
    if (!name || !species) {
      Alert.alert('Virhe', 'Täytä kaikki kentät ennen kasvin lisäämistä!');
      return;
    }

    const newPlant = {
      id: Date.now(), // Uniikki ID kasville
      name: name, // Käyttäjän syöttämä nimi
      species: species, // Käyttäjän syöttämä lajike
      nextWatering: nextWatering.toISOString(), // Käyttäjän valitsema päivämäärä
      image: '', // Kuvan lisääminen voidaan toteuttaa myöhemmin
    };

    await addPlant(newPlant); // Lisää uusi kasvi AppContextiin

    // Ajasta muistutus käyttäjän valitsemaan aikaan
    await scheduleNotification(
      'Kastelumuistutus',
      `${newPlant.name} kaipaa kastelua!`,
      nextWatering
    );

    Alert.alert('Onnistui', 'Kasvi lisätty ja muistutus ajastettu!');
    navigation.goBack(); // Palaa takaisin etusivulle
  };

  // Funktiot päivämäärävalitsimen hallintaan
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setNextWatering(date); // Päivitetään valittu päivämäärä
    hideDatePicker(); // Suljetaan päivämäärävalitsin
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kasvin nimi</Text>
      <TextInput
        style={styles.input}
        placeholder="Esim. Aloe Vera"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Lajike</Text>
      <TextInput
        style={styles.input}
        placeholder="Esim. Aloe"
        value={species}
        onChangeText={setSpecies}
      />

      <Text style={styles.label}>Seuraava kastelu</Text>
      <CustomButton
        title={`Valitse aika: ${nextWatering.toLocaleString()}`}
        onPress={showDatePicker}
      />

      {/* Päivämäärävalitsin */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm} // Käsitellään vahvistus
        onCancel={hideDatePicker} // Käsitellään peruutus
      />

      <CustomButton title="Lisää uusi kasvi" onPress={handleAddPlant} />
      <CustomButton title="TAKAISIN ETUSIVULLE" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default AddPlantScreen;
