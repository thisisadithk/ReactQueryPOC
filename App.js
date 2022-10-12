import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import DisplayTodos from "./components/DisplayTodos";
import DisplayUsers from "./components/DisplayUsers";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import IndividualUser from "./components/IndividualUser";

// Create a client
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "My Todos") {
                  iconName = focused ? "checkbox" : "checkbox-outline";
                } else if (route.name === "Users") {
                  iconName = focused ? "people" : "people-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="My Todos" component={DisplayTodos} />
            <Tab.Screen name="Users" component={UsersStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </View>
  );
}

function UsersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Users"
        component={DisplayUsers}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Individual User" component={IndividualUser} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});
