'use client'
import styles from './styles.module.scss'
import { useFormStatus } from 'react-dom';

//Pending significa que está carregando alguma coisa. Até que aquela função seja resolvida. "Pendenti"

//BOTÃO PERSONALIZADO
interface Props{
    name: string;
}

export function Button({name}: Props){
    const {pending} = useFormStatus();
    
    return( 
        <button type='submit' className={styles.button}>
            {pending ? "Carregando..." : name}
        </button>
    )
}