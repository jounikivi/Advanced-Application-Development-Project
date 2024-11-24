import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReminderCard = ({ reminder }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{reminder.title}</Text>
      <Text style={styles.details}>{reminder.description}</Text>
      <Text style={styles.date}>Eräpäivä: {reminder.dueDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#00796b',
  },
});

export default ReminderCard;
