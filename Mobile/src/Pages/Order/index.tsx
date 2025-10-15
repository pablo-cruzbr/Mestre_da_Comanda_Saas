import React, {useState, useEffect} from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    TextInput,
    Modal,
    FlatList
    
} from "react-native";
import { useRoute, RouteProp , useNavigation} from "@react-navigation/native";
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api";
import {ModalPicker} from "../../components/ModalPicker/index"
import { ListItem } from "../../components/ListItem";
import { FinishOrder } from "../FinishOrder";
import { StackPramsList } from "../../routes/app.routes";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

//Tipagem dizendo quais parâmetros queremos receber
type RouteDetailParams = {
    Order: {
        number: number | string;
        order_id: string;
    }
}

export type CategoryProps = {
    id: string;
    name: string;
}

export type ProductProps = {
    id: string;
    name: string;
}

type ItemProps = {
    id: string;
    name: string;
    product_id: string;
    amount: string | number
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order(){
    const route = useRoute<OrderRouteProps>();
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>()

    //=========VARIÁVEIS DE ESTADOS DA CATEGORIA==========
    const [category, setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelect, setCategorySelect] = useState<CategoryProps | undefined>()
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false)

    //=========VARIÁVEIS DE ESTADO DE PRODUTOS===========
    const [product, setProduct] = useState<ProductProps[] | []>([])
    const [productSelect, setProductSelect] = useState<ProductProps | undefined>()
    const [modalProductVisible, setModalProductVisible] = useState(false)


    const [amount, setAmont] = useState('1')
    const [items, setItems] = useState<ItemProps[]>([])

    useEffect(()=>{
       async function loadProducts(){
        const response = await api.get('/category/product',{
            params:{
                category_id: categorySelect?.id
            }
        })
       // console.log(response.data)
        setProduct(response.data)
        setProductSelect(response.data[0])
       }
       loadProducts();
    }, [categorySelect])

    useEffect(()=>{
        async function loadInfo(){
            const response = await api.get('/category')
            
            //Vamos passar dentro da nossa listagem de categoria
            setCategory(response.data);
            //Pegar a Primeira posição  da categoria selecionada
            setCategorySelect(response.data[0])
        }

        loadInfo();
    }, [])

    async function handleCloseOrder() {
        try {
          const orderId = route.params?.order_id;
      
          if (!orderId) {
            console.warn("❗ order_id não está disponível");
            return;
          }
      
          await api.delete('/order/delete', {
            params: {
              order_id: orderId,
            },
          });
      
          navigation.goBack();
        } catch (err: any) {
          console.error("Erro ao fechar pedido:", err.response?.data || err.message);
        }
      }
      
   
    function handleChangeCategory(item: CategoryProps){
        setCategorySelect(item);
    }

    function handleChangeProduct(item: ProductProps){
        setProductSelect(item)
    }


    async function handleAdd() {
        const response = await api.post('/order/add', {
          order_id: route.params?.order_id,
          product_id: productSelect?.id,
          amount: Number(amount),
        });
      
        const data = {
          id: response.data.id,
          product_id: productSelect?.id,
          name: productSelect?.name,
          amount: amount,
        }
        
        setItems(oldArray => [...oldArray, data])
       
    }
      
    async function handleDeleteItem(item_id: string){
        //alert("ID " + item_id)
        await api.delete('/item/remove',{
            params:{
                item_id: item_id
            }
         })

         //Após remover da api removemos esse item da nossa lista de items
         let removeItem = items.filter(item => {
            return(item.id !== item_id)
         })

         setItems(removeItem)
    }

    function handleFinishOrder(){
        navigation.navigate("FinishOrder",{
            number: route.params.number,
            order_id: route.params.order_id
        })
    }
    
    
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>Mesa {route.params.number}</Text>
            
           {items.length === 0 && (
             <TouchableOpacity>
             <Feather name="trash-2" size={28} color={'#FF3F4B'} onPress={handleCloseOrder}/>
         </TouchableOpacity>
           )}
            </View>

           {category.length !== 0 && (
             <TouchableOpacity style={styles.input} onPress={() => setModalCategoryVisible(true)}>
             <Text style={{color:'#FFF'}}>
                 {categorySelect?.name}
             </Text>
         </TouchableOpacity>
           )}
            
           {product.length !== 0 && (
             <TouchableOpacity style={styles.input} onPress={()=> setModalProductVisible(true)}>
             <Text style={{color:'#FFF'}}>{productSelect?.name}</Text>
            </TouchableOpacity>
           )}
           
            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput
                style={[styles.input, {width: '60%', textAlign:'center'}]}
                placeholderTextColor={"#F0F0F0"}
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmont}
                
                />
            </View>

            <View style={styles.actions}>
            <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
  <Text style={styles.buttonText}>+</Text>
</TouchableOpacity>


                <TouchableOpacity 
                style={[styles.button, {opacity: items.length === 0 ? 0.3 : 1}]}
                disabled={items.length === 0}
                onPress={handleFinishOrder}
                >
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            showsHorizontalScrollIndicator={false}
            style={{flex: 1, marginTop: 24}}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem data={item} deleteItem={handleDeleteItem} /> }
            
            />


            <Modal 
            transparent={true}
            visible={modalCategoryVisible}
            animationType="slide"
            >
                <ModalPicker
                handleCloseModal={() => setModalCategoryVisible(false)}
                options={category}
                selectedItem={handleChangeCategory}
                />
            </Modal>

           <Modal
           transparent={true}
           visible={modalProductVisible}
           animationType="slide"
           >
                <ModalPicker
                handleCloseModal={() => setModalProductVisible(false)}
                options={product}
                selectedItem={handleChangeProduct}
                />
           </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1D1D2E",
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%'
        
    },
    center:{
        alignSelf: 'center',
        paddingBottom: 15
    },
    header:{
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: 24
    },
    title:{
        fontSize: 30,
        color: '#FFFF',
        fontWeight: 'bold',
        marginRight: 15       
  },

    input:{
        backgroundColor: '#101026',
        width: "100%",
        height: 50,
        marginBottom: 12,
        paddingHorizontal: 10,
        color: '#FFF',
        fontSize: 20,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    qtdContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    qtdText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFF'
    },
    actions:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    buttonAdd:{
        width: '20%',
        backgroundColor: '#3fd1ff',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#101026',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    button:{
        backgroundColor: '#3fffa3',
        borderBottomColor: '#3fffa3' ,
        height: 40,
        width: '75%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
})