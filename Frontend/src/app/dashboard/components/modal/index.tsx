"use client"

import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { useContext } from 'react';
import { OrderContext } from '@/provider/order';
import { calculateTotalOrder } from '@/lib/helper';

export function Modalorder() {
    const { onRequestClose, order, finishOrder } = useContext(OrderContext);

    
    async function handleFinishOrder(){
            await finishOrder(order[0].order.id);
    }
    console.log("Estado de order:", order); 
    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                
                <div className={styles.dialogxPosition}>
                    <button className={styles.dialogBack}>
                        <X size={40} color='#FF3f4b' onClick={onRequestClose} />
                    </button>
                </div>

                <article className={styles.container}>
                    <h2>Detalhes do Pedido</h2>
                    
                    <span className={styles.table}>
                        {order.length > 0 ? (
                            <>Mesa <b>{order[0].order.table}
                           </b>
                    <span/>
                    {order[0].order?.name && (
                    <span className={styles.name}>
                            <>Nome: <b>{order[0].order.name}
                           </b></>   
                    </span>
                     )}</>

                  ) : (
                            "Esta order não contém pedidos !"
                        )}
                    </span>

                    {order.length > 0 && order.map(item => (
                        <section className={styles.item} key={item.id}>
                           <span>R$ {parseFloat(item.product.price) * item.amount}<b> - Qtd: </b>{item.amount} </span>
                           <b>{item.product.name}</b> 
                            <span className={styles.description}>{item.product.description}</span>
                        </section>
                    ))}

                    <h3 className={styles.total}>Valor Total: R$ {calculateTotalOrder(order)} </h3>

                    <button className={styles.buttonOrder} onClick={handleFinishOrder}>
                        Concluir pedido
                    </button>
                </article>

            </section>
        </dialog>
    );
}
