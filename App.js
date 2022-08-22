import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import MealOverViewScreen from './src/Screens/MealOverViewScreen';
import MealDetailsScreen from './src/Screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './src/Screens/FavouriteScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FavouriteContext from './src/store/context/Favourite-Context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContainer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#230b0b',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#433232',
        },
        drawerContentStyle: {
          backgroundColor: '#3b3131',
        },
        drawerActiveTintColor: '#2f2626',
        drawerInactiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#755e5e',
      }}>
      <Drawer.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => {
            <FontAwesomeIcon name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({color, size}) => {
            <FontAwesomeIcon name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <FavouriteContext>
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
            component={DrawerContainer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouriteContext>
  );
};

export default App;
