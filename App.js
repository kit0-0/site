import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/styles';
import ExpensesContextProvider from './store/expenses-context';
import IconButton from './components/UI/IconButton';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <Tab.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpense');
          }}
        />
      ),
    })}
  >
      <Tab.Screen options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }} name="AllExpenses" component={AllExpenses} />
      <Tab.Screen options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }} name="RecentExpenses" component={RecentExpenses} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <ExpensesContextProvider>
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="ExpensesOverview" options={{ headerShown: false }} component={ExpensesOverview} />
<Stack.Screen options={{
                presentation: 'modal',
              }} name="ManageExpense" component={ManageExpense} />
</Stack.Navigator>
</NavigationContainer>
</ExpensesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
