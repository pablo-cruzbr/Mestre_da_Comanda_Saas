
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/authContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <StatusBar backgroundColor="#1d1d2e" barStyle={'light-content'} translucent={false}/>
          <Routes/>
     </AuthProvider>
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
