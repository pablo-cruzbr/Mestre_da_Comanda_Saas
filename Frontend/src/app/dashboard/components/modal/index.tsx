"use client"

import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { useContext } from 'react';
import { OrderContext } from '@/provider/order';
import { calculateTotalOrder } from '@/lib/helper';

export function Modalorder() {
    const { onRequestClose, order, finishOrder } = useContext(OrderContext);
    
    async function handleFinishOrder(){
        if(order.length > 0){
            await finishOrder(order[0].order_id); 
        }
    }

    return (
        <section className={styles.dialogContainer}>
            <div className={styles.dialogContent}>
                
                <div className={styles.dialogxPosition}>
                    <button className={styles.dialogBack} onClick={onRequestClose}>
                        <X size={40} color='#FF3f4b' />
                    </button>
                </div>

                <article className={styles.container}>
                    <h2>Detalhes do Pedido</h2>
                    
                    <span className={styles.table}>
                        {order.length > 0 ? (
                            <>
                                Mesa <b>{order[0].order.table}</b>
                                {order[0].order?.name && (
                                    <span className={styles.name}>
                                        <br /> Nome: <b>{order[0].order.name}</b>
                                    </span>
                                )}
                            </>
                        ) : (
                            "Esta order não contém pedidos!"
                        )}
                    </span>

                    {order.map(item => (
                        <section className={styles.item} key={item.id}>
                            <span>
                                <b>{item.amount}x </b> {item.product.name} 
                                — R$ {(parseFloat(item.product.price) * item.amount).toFixed(2)}
                            </span>
                            <span className={styles.description}>{item.product.description}</span>
                        </section>
                    ))}

                    <h3 className={styles.total}>
                        Valor Total: <b>R$ {calculateTotalOrder(order)}</b>
                    </h3>

                    <button className={styles.buttonOrder} onClick={handleFinishOrder}>
                        Concluir pedido
                    </button>
                </article>
            </div>
        </section>
    );
}