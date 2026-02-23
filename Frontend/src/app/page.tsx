import Image from "next/image";
import styles from './styles.module.scss';
import logoImg from "../../public/logo3.svg";
import Link from "next/link";
import {cookies} from "next/headers";
import {api} from "@/services/api";
import { redirect } from "next/navigation";
import { RegisterForm } from "@/components/forms/register-form";


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
    <div className="bg-app-background min-h-screen flex items-center justify-center px-4 py-8"> 
     <div className="w-full">
        <RegisterForm/>
     </div>
    </div>
  );
}
