import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import MealOverViewScreen from './src/Screens/MealOverViewScreen';
import MealDetailsScreen from './src/Screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#230b0b',
          },
          headerTintColor: '#fff',
          contentStyle: {
            backgroundColor: '#433232',
          },
        }}>
        <Stack.Screen
          name="categoriesScreen"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        />
        <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
