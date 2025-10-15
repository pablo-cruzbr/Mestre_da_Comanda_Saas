import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1 - Tipagem do contexto
type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
};

// 2 - Tipagem do usuário
type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

// 3 - Tipagem do componente AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

type SignInProps = {
  email: string;
  password: string;
};

// 4 - Criação do contexto
export const AuthContext = createContext({} as AuthContextData);

// 5 - Componente AuthProvider
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user.name;

  // Carrega o usuário salvo no AsyncStorage
  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@PabloRestaurante');
      const hasUser: UserProps = JSON.parse(userInfo || '{}');

      if (hasUser && hasUser.token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        });
      } else {
        console.warn('⚠️ Token não encontrado no AsyncStorage');
      }

      setLoading(false);
    }

    getUser();
  }, []);

  // Função de login
  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      const { id, name, token } = response.data;
      const data = {
        ...response.data,
      };

      await AsyncStorage.setItem('@PabloRestaurante', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
        token,
      });
    } catch (error: any) {
      console.log('❌ Erro ao fazer login:', error);

      if (error.response) {
        console.log('🧾 Erro de resposta da API:', error.response.data);
      }
    } finally {
      setLoadingAuth(false);
    }
  }

  // Função de logout
  async function signOut() {
    await AsyncStorage.removeItem('@PabloRestaurante');
    setUser({
      id: '',
      name: '',
      email: '',
      token: '',
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        loading,
        loadingAuth,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
