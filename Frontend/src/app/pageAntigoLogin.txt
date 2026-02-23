import Image from "next/image";
import styles from './styles.module.scss';
import logoImg from "../../public/logo3.svg";
import Link from "next/link";
import {cookies} from "next/headers";
import {api} from "@/services/api";
import { redirect } from "next/navigation";


export default async function Home() {
  async function handleLogin(formData: FormData){
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")

    if(email ==="" || password === ""){
      console.log("POR FAVOR PREENCHA TODOS OS CAMPOS")
    } 
    try{
    const response = await api.post("/session",{
      email,
      password
    })
    if(!response.data.token){
      return;
    }

    const expressTime = 60 * 60 * 24 * 30 * 1000;
    const cookieStore = await cookies();
    cookieStore.set("session", response.data.token,{
      maxAge: expressTime,
      path:"/",
      httpOnly: false,
    secure: process.env.NODE_ENV === "production"
   
  })
    }catch(err){
      console.log("error")
      console.log(err)
    }
    redirect("/dashboard");
  }
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

           <Link href="/signup" className={styles.text}>
          Página de Registro
          </Link> 
        </div>
      </div>

      <div className={styles.panelsContainer}>
        <div className={`${styles.panel} ${styles.leftPanel}`}>
          <div className={styles.content}>
            <Image
               src="/logo3.svg"
              alt="Ilustração de boas-vindas"
              width={400}
              height={500}
              className={styles.image}
            />
             <h3>Taiwindcss</h3>
            <h3>Gestão de Comandas que Transforma <br></br> seu Atendimento.</h3>
            <h4>
              A solução ideal para Restaurantes, Hamburguerias, <br /> Lanchonetes, Bares e Padarias.
            </h4>
            <p>Feito para Restaurantes, Lanchonetes, Hamburguerias e Padarias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
