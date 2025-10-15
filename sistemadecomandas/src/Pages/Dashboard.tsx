import React, { useContext, useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TextInput,
    TouchableOpacity,
    Button,
    SafeAreaView
} from 'react-native';
import { AuthContext } from '../contexts/authContext';

import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { StackPramsList } from '../routes/app.routes';
import { api } from '../services/api';

export default function Dashboard(){
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    const [number, setNumber] = useState('');

    const {signOut} = useContext(AuthContext)
  

    async function openOrder(){
        //alert('TESTE')
        //1 - condicional caso não digite nada, não retorna nada
        if(number === ""){
            return;
        }

        const response = await api.post('/order',{
            table: Number(number)

        
        }) 
        console.log(response.data)
        //precisa fazer a requisição e abrir a mesa e navegar pra próxima tela
        
        console.log('[openOrder] response.data:', response.data);

        navigation.navigate('Order', {
        number: number,
        order_id: response.data.id
        });

        //Limpar campo após digitar
        setNumber('');

    }
    return(
     <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            Novo Pedido
        </Text>

        <TextInput
        style={styles.textInput}
        placeholderTextColor="#F0F0F0"
        placeholder='Digite o Número da Mesa'
        textAlign='center'
        keyboardType='numeric'
        value={number}
        onChangeText={setNumber}
        />

        <TouchableOpacity style={styles.button} onPress={openOrder}>
            <Text style={styles.buttonText}>Abrir Mesa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogout} onPress={signOut}>
            <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
     </SafeAreaView>
     
      )
  }
  
  const styles = StyleSheet.create({
      container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#1D1D2E"
      },
      title:{
          fontSize: 25,
          color: '#FFFF'
      },
      textInput: {
        backgroundColor: '#101026',
        width: '70%',
        height: 60,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: '#FFFF',
        margin: 15,
        fontSize: 20
      },
      button:{
        width:'70%',
        height: 50,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17
      },
      buttonLogout:{
        width:'50%',
        height: 40,
        backgroundColor: '#FF0000',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        
      },
      buttonText:{
        fontWeight: 'bold',
        fontSize: 19,
        color: '#FFFF' 
      }
      
  })
