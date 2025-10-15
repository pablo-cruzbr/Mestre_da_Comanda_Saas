import styles from './styles.module.scss'
import {api} from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import {Form} from '../components/form' 

export default async function Product(){

    const token = await getCookieServer();

    const response = await api.get("/category",{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log(response.data)
    

    return(
        <div className={styles.container}>
         <Form categories={response.data}/>
        </div>
     )
 
}
  
    