import Image from "next/image";
import styles from "../page.module.scss";
import logoImg from "../../../public/logo2.svg";
import Link from "next/link";
import {api} from '@/services/api';
import {toast} from 'sonner';

//REDIRECIONAR USUÁRIO
import {redirect} from 'next/navigation'

export default function signup(){
 async function handleRegister(formData: FormData){
  "use server"
  const name = formData.get("name")
	const email = formData.get("email")
	const password = formData.get("password")

  //Condicional caso o usuário querer burlar
  if(name === "" || email === "" || password === ""){
      console.log("POR FAVOR PREENCHA TODOS OS CAMPOS")
      return;
    
  }

  //Fazer a requisição, resgistrar o usuário ao nosso banco
  try{
    await api.post("/users",{
      name,
      email,
      password
    })
    
  
  }catch(err){
    console.log("error")
    console.log(err)
  }
  redirect("/")
  }

    return(
        <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo da pizzaria"
        />
  
        <section className={styles.login}>

        <h1>Faça seu Cadastro</h1>
          <form action={handleRegister}>
        
          <input
            type="name"
            required
            name="name"
            placeholder="Digite seu nome"
            className={styles.input}
            />

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
          
            <Link href="/" className={styles.text}>
              Já possui uma conta? Faça seu Login
            </Link> 
  
        </section>
      </div>
    )
} 