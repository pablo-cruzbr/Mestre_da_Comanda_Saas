import styles from './styles.module.scss';
import {Button} from '../components/button/index'

//1 - Importar api para requisição
import { api } from '@/services/api';

//2 - Pegar o token do usuário
import { getCookieServer } from '@/lib/cookieServer';

//3 - Redirecionar o usuário para pagina dashboard
import { redirect } from 'next/navigation';

export default function Category(){
interface Category {
    id: string;
    name: string
}
    //Função Asyncrona para Registrar usuário:
    async function handleRegisterCategory(formData: FormData){
        "use server"

        //Pegar a propriedade name do shcema/input
        const name = formData.get("name")

        //Validação Condicional para preencher o input
        if(name === "") return;

        const data = {
        name: name,
        }
       
        //Garantimos que o valor do token seja obtido aguardando a função ser executada com await.
        const token = await getCookieServer();
        //Vamos fazer um post em nossa rota /category com o Bearer token
        
        try{
        const response = await api.post("/category", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data)
    } catch (err) {
        console.log("Erro ao cadastrar categoria:", err);
        return;
    }
        //Direcionar o usuário para o das dashboard
        redirect("/dashboard")
        }

        
       
        return(
        <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2x1 sm:text-3xl font-bold text-white">Categorias</h1>
                </div>
            </div>
            <button>Teste</button>
        </div>
    )
}