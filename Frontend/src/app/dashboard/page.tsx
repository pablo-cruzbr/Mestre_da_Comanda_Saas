import Orders from './orders'
import { api } from '@/services/api' 
import { getCookieServer } from '@/lib/cookieServer'
import { OrderProps } from '@/lib/order.types'

async function getOrders(): Promise<OrderProps[] | []>{
    try{
        const token = await getCookieServer();
      
        const response = await api.get("/orders",{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data || [];
    }catch(err){
        console.log(err);
        return [];
    }
}


export default async function Header() {

    const orders = await getOrders();
    //console.log('Orders Buscadas no banco de dados:',orders);
    
    return(
    <>
        <Orders orders={orders}/>
    </>
    )
}