
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/authContext';
import { colors } from './src/styles/theme';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <StatusBar backgroundColor={colors.background} barStyle={'light-content'} translucent={false}/>
          <Routes/>
     </AuthProvider>
     </NavigationContainer>
  );
}
