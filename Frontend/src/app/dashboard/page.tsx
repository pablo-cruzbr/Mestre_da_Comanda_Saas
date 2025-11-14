import Orders from './orders'
import { api } from '@/services/api' 
import { getCookieServer } from '@/lib/cookieServer'
import { OrderProps } from '@/lib/order.types'
import { OrderItemProps } from '@/provider/order'

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

async function getOrderDetail(order_id: string): Promise<OrderItemProps[]> {
  try {
    const token = await getCookieServer();

    const response = await api.get("/order/detail", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        order_id
      }
    });

    return response.data || [];
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function getOrdersWithDetails() {
  const orders = await getOrders();

  const ordersWithDetails = await Promise.all(
    orders.map(async (order) => {
      const items = await getOrderDetail(order.id);
      return {
        ...order,
        items
      };
    })
  );

  return ordersWithDetails;
}



export default async function Header() {
  const orders = await getOrdersWithDetails();

  return (
    <>
      <Orders orders={orders} />
    </>
  );
}
