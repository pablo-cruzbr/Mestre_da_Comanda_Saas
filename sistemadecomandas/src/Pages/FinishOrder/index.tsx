import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api"
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native"
import { StackPramsList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
            <Text style={styles.title}>Você Deseja Finalizar esse Pedido ?</Text>
            <Text style={styles.titleMesa}>Mesa {route.params.number}</Text>

            <TouchableOpacity style={styles.button } onPress={handleFinish}>
                    <Text style={styles.textButton}>Finalizar Pedido</Text>
                    <Feather name="shopping-cart" size={20} color='#1d1d2e'/>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1D1D2E",
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 0
    },
    title:{
        fontSize: 20,
        color: '#FFFF',
        fontWeight: '500',
        marginRight: 15       
  },

  titleMesa:{
    fontSize: 25,
    color: '#FFFF',
    fontWeight: '500',
    margin: 10  
  },

  button:{
    backgroundColor: '#3fffa3',
    height: 40,
    width: '65%',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4


  },
  textButton:{
    color: '#101026',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 6
  }

})



