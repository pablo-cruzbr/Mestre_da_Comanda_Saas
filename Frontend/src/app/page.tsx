
import Image from "next/image";
import styles from "./page.module.scss";
import logoImg from "../../public/logo2.svg";
import Link from "next/link";
import {cookies} from "next/headers";
import {api} from "@/services/api"
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
    <div className={styles.containerCenter}>
      <Image
        src={logoImg}
        alt="Logo da pizzaria"
      />

      <section className={styles.login}>
     
      <h1>Faça seu Login</h1>
        <form action={handleLogin}>
          <input
          type="email"
          required
          name="email"
          placeholder="Digite seu email"
          className={styles.input}
          />

        <input
          type="password"
          required
          name="password"
          placeholder="Digite sua senha"
          className={styles.input}
          />

         <button type="submit">
          Acessar
          </button>
        </form>

          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link> 

      </section>
    </div>
  );
}
