import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Search from './screens/Search';
import ArticleDetailed from './screens/ArticleDetailed';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options = {{
        headerTitle: "News"
      }}/>
      <Stack.Screen name="ArticleDetailed" component={ArticleDetailed} options = {{
      }}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#00115e",
      }}>
        <Tab.Screen name="HomeTab" options = {{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => <Ionicons name="newspaper-outline" size={24} color="black" />,
          }} 
          component={HomeScreen} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarLabel: "Search",
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
