import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddPlantScreen from '../screens/AddPlantScreen';
import PlantProfileScreen from '../screens/PlantProfileScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#f8f8f8' }, // Default light theme
        headerTintColor: '#000', // Default text color
        headerTitleStyle: {
          fontWeight: 'bold', // Ensure header title styling
          fontSize: 18, // Set font size
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddPlant" component={AddPlantScreen} />
      <Stack.Screen name="PlantProfile" component={PlantProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
