import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api"
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native"
import { StackPramsList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors, radius, spacing } from "../../styles/theme";

type RouteDetailParams = {
    FinishOrder:{
        number: number | string;
        order_id: string;
    }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export function FinishOrder(){
    const route = useRoute<FinishOrderRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>()

  async function  handleFinish(){
    //alert('CLICOU !!!')

    try{
        await api.put ('/order/send',{
            order_id: route.params?.order_id
        })
        navigation.popToTop();
    }catch(err){
        console.log("ERRO AO FINALIZAR, tente mais tarder")
    }

  }

    return(
        <View style={styles.container}>
            <View style={styles.iconCircle}>
                <Feather name="shopping-cart" size={36} color={colors.primary} />
            </View>

            <Text style={styles.title}>Você deseja finalizar esse pedido?</Text>
            <Text style={styles.titleMesa}>Mesa {route.params.number}</Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish} activeOpacity={0.8}>
                    <Text style={styles.textButton}>Finalizar Pedido</Text>
                    <Feather name="check-circle" size={20} color={colors.onPrimary}/>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconCircle:{
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg
    },
    title:{
        fontSize: 20,
        color: colors.text,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: spacing.xs
  },

  titleMesa:{
    fontSize: 25,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xl
  },

  button:{
    backgroundColor: colors.primary,
    height: 48,
    width: '80%',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: radius.sm
  },
  textButton:{
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: spacing.xs
  }

})
