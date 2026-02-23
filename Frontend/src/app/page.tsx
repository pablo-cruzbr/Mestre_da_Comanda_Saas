import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    CardContent
} from "@/components/ui/card"
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { api } from '@/services/api'

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
    <div className="min-h-screen bg-app-background flex items-center justify-center p-4">
            <Card className="bg-app-card border-app-border w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-white text-center text-3xl font-bold tracking-tight">
                    Mestre das <span className="text-brand-primary"> Comandas</span>
                    </CardTitle>
                </CardHeader>

                <p className="text-center text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto mt-2">
                  Gestão de Comandas <span className="text-white font-medium">que multiplica seu faturamento e agiliza seu caixa.</span> 
                </p>
                <CardContent>
                    <form  action={handleLogin} className="flex flex-col gap-4"> 
                        <div className="flex flex-col gap-4">
                            <Label htmlFor='name' className="text-white">
                                Email</Label>
                            <Input
                                type='text'
                                name='email'
                                id='email'
                                placeholder='Digite seu email'
                                required
                                className="text-white bg-app-card border-app-border"
                            />
                        </div>
    
                        <div className="flex flex-col gap-4">
                            <Label htmlFor='name' className="text-white">
                                Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Digite seu password'
                                required
                                className="text-white bg-app-card border-app-border"
                            />
                        </div>
    
                        <Button type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-primary">
                            Cadastrar
                        </Button>
    
                        <p className="text-center text-sm text-gray-100">
                            Não tem uma conta? <Link href="/signup" className='text-brand-primary font-medium '> Faça seu Cadastro</Link>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
  );
}
