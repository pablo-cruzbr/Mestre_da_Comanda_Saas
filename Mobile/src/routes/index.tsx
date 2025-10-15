import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../contexts/authContext";

function Routes() {
  //const isAuthenticated = false;
  const {isAuthenticated, loading} = useContext(AuthContext)
  //const loading = false;
  console.log('Usuário autenticado?', isAuthenticated);
  // Tela de carregamento
  // Se loading estiver true exibe uma tela de carregamento
  if (loading) {
    return (
      <View 
        style={{
          flex: 1,
          backgroundColor: "#1D1D2E",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={60} color="#FFF" />
      </View>
    );
  }

// Se is Authenticated, mostra as rotas do app, senão mostra as de autenticação 
    return(
      isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
  }

export default Routes;
