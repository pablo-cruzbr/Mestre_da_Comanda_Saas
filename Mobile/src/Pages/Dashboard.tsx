import React, { useContext, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../contexts/authContext';

import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { StackPramsList } from '../routes/app.routes';
import { api } from '../services/api';
import { colors, radius, spacing } from '../styles/theme';

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
        <KeyboardAvoidingView
            style={styles.content}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <TouchableOpacity style={styles.logoutIcon} onPress={signOut}>
                <Feather name="log-out" size={22} color={colors.danger} />
            </TouchableOpacity>

            <View style={styles.iconCircle}>
                <Feather name="clipboard" size={32} color={colors.primary} />
            </View>

            <Text style={styles.title}>Novo Pedido</Text>
            <Text style={styles.subtitle}>Informe o número da mesa para abrir a comanda</Text>

            <View style={styles.card}>
                <TextInput
                style={styles.textInput}
                placeholderTextColor={colors.placeholder}
                placeholder='Número da mesa'
                textAlign='center'
                keyboardType='numeric'
                value={number}
                onChangeText={setNumber}
                />

                <TouchableOpacity
                    style={[styles.button, { opacity: number === '' ? 0.5 : 1 }]}
                    onPress={openOrder}
                    disabled={number === ''}
                    activeOpacity={0.8}
                >
                    <Feather name="plus-circle" size={18} color={colors.surface} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Abrir Mesa</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
     </SafeAreaView>
      )
  }

  const styles = StyleSheet.create({
      container:{
          flex: 1,
          backgroundColor: colors.background
      },
      content:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: spacing.lg
      },
      logoutIcon:{
          position: 'absolute',
          top: spacing.lg,
          right: spacing.lg,
          padding: spacing.xs
      },
      iconCircle:{
          width: 72,
          height: 72,
          borderRadius: 36,
          backgroundColor: colors.surface,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: spacing.md
      },
      title:{
          fontSize: 24,
          fontWeight: '700',
          color: colors.text
      },
      subtitle:{
          fontSize: 13,
          color: colors.textMuted,
          textAlign: 'center',
          marginTop: spacing.xs,
          marginBottom: spacing.lg,
          paddingHorizontal: spacing.lg
      },
      card:{
          width: '100%',
          maxWidth: 420,
          backgroundColor: colors.surface,
          borderRadius: radius.lg,
          padding: spacing.md,
          alignItems: 'center'
      },
      textInput: {
        backgroundColor: colors.background,
        width: '100%',
        height: 56,
        marginBottom: spacing.md,
        borderRadius: radius.sm,
        paddingHorizontal: spacing.md,
        color: colors.text,
        fontSize: 20,
        borderWidth: 1,
        borderColor: colors.border
      },
      button:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderRadius: radius.sm,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonIcon:{
        marginRight: spacing.xs
      },
      buttonText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.surface
      }
  })
