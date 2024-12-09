import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon library
import StackNavigator from './StackNavigator'; // Existing StackNavigator
import AddPlantScreen from '../screens/AddPlantScreen'; // Example screen for second tab
import PlantProfileScreen from '../screens/PlantProfileScreen'; // Import the PlantProfileScreen

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline'; // Icon for HomeStack
          } else if (route.name === 'AddPlant') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'; // Icon for AddPlant
          } else if (route.name === 'PlantProfile') {
            iconName = focused ? 'leaf' : 'leaf-outline'; // Icon for PlantProfile
          }

          // Return the appropriate icon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Active tab icon color
        tabBarInactiveTintColor: 'gray', // Inactive tab icon color
      })}
    >
      {/* Tab 1: Home/Stack Navigator */}
      <Tab.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{ headerShown: false, title: 'Koti' }}
      />

      {/* Tab 2: Add Plant */}
      <Tab.Screen
        name="AddPlant"
        component={AddPlantScreen}
        options={{ title: 'Lisää Kasvi' }}
      />

      {/* Tab 3: Plant Profile */}
      <Tab.Screen
        name="PlantProfile"
        component={PlantProfileScreen}
        options={{ title: 'Kasvin Profiili' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
