import Image from "next/image";
import styles from './styles.module.scss';
import logoImg from "../../../public/logo2.svg";
import Link from "next/link";
import {cookies} from "next/headers";
import {api} from "@/services/api";
import { redirect } from "next/navigation";


export default async function Home() {
  //FUNÇÃO PARA LOGAR O USUÁRIO NA PLATAFORMA
  async function handleLogin(formData: FormData){
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    //CONDICIONAL CASO O USUÁRIO QUERER BURLAR
    if(email ==="" || password === ""){
      console.log("POR FAVOR PREENCHA TODOS OS CAMPOS")
    }

    //FAZER REQUISIÇÃO, REGISTRAR USUÁRIO AO BANCO DE DADOS
    try{
    const response = await api.post("/session",{
      email,
      password
    })

    //VERIFICAÇÃO DE TOKEN DO USUÁRIO
    if(!response.data.token){
      return;
    }

  
    //Cria um tempo estimado para o cookie expirar
    const expressTime = 60 * 60 * 24 * 30 * 1000;
    //Função assincrona
    const cookieStore = await cookies();
    cookieStore.set("session", response.data.token,{
    //Tempo que queremos que o cookie expire
      maxAge: expressTime,
      path:"/",
      httpOnly: false,
    //Só habilitar em produção por agente estar em localhost 
    secure: process.env.NODE_ENV === "production"
   
  })
    }catch(err){
      console.log("error")
      console.log(err)
    }
    redirect("/dashboard");
  }

  

//Persistir o Token do usuário que está logado


 
  return (
    <div className={styles.container}>
      <div className={styles.formsContainer}>
        <div className={styles.signinSignup}>
          <form action={handleLogin} className={styles.signInForm}>
            <h2 className={styles.title}>Entrar</h2>

            <div className={styles.inputField}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className={styles.inputField}>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                required
              />
            </div>

            <button type="submit" className={`${styles.btn} ${styles.solid}`}>
              Acessar
            </button>
          </form>
        </div>
      </div>

      <div className={styles.panelsContainer}>
        <div className={`${styles.panel} ${styles.leftPanel}`}>
          <div className={styles.content}>
            <Image
              src={logoImg}
              alt="Ilustração de boas-vindas"
              width={400}
              height={500}
              className={styles.image}
            />
            <h3>Sua Central de Comandas Inteligente e Rápida</h3>
            <h4>
              Abra Mesas, acompanhe pedidos e cadastre <br />
              seus produtos e tenha seu cardápio sempre atualizado !!!.
            </h4>
            <p>Feito para Restaurantes, Lanchonetes,Hamburguerias e Padarias .</p>
          </div>
        </div>
      </div>
    </div>
  );
}
