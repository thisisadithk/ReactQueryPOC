import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DisplayTodos from './components/DisplayTodos';
import DisplayUsers from './components/DisplayUsers';

// Create a client
const queryClient = new QueryClient()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        {/* <DisplayTodos/> */}
        <DisplayUsers/>
      </QueryClientProvider>
    </View>
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
