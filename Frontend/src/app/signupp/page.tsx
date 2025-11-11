import Image from "next/image";
import styles from "../page.module.scss";
import logoImg from "../../../public/logo2.svg";
import Link from "next/link";
import {api} from '@/services/api';
import {toast} from 'sonner';

//REDIRECIONAR USUÁRIO
import {redirect} from 'next/navigation'

export default function login(){
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
      <div className={styles.container}>
      <div className={styles.formsContainer}>
        <div className={styles.signinSignup}>
          <form action={handleRegister} className={styles.signInForm}>
            <h2 className={styles.title}>Cadastre um Novo Usuário</h2>

            <div className={styles.inputField}>
            <input
            type="name"
            required
            name="name"
            placeholder="Digite seu nome"
            className={styles.input}
            />
             </div>
            
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
              Registrar
            </button>
          </form>

           <Link href="/login" className={styles.text}>
            Nova Página de Login
          </Link> 
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
            <h3>Registre um Novo Usuário</h3>
            
          </div>
        </div>
      </div>
    </div>
    )
} 