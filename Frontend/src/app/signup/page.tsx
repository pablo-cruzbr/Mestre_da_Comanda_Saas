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
import { api } from '@/services/api'

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
    <div className="min-h-screen bg-app-background flex items-center justify-center p-4">
            <Card className="bg-app-card border-app-border w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-white text-center text-3xl font-bold tracking-tight">
                    Mestre das <span className="text-brand-primary"> Comandas</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={handleRegister} className="flex flex-col gap-4"> 
                        <div className="flex flex-col gap-4">
                            <Label htmlFor='name' className="text-white">
                                Nome</Label>
                            <Input
                                type='text'
                                id='name'
                                placeholder='Digite seu nome'
                                required
                                minLength={3}
                                className="text-white bg-app-card border-app-border"
                            />
                        </div>
    
                        <div className="flex flex-col gap-4">
                            <Label htmlFor='name' className="text-white">
                                Email</Label>
                            <Input
                                type='text'
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
                            Já tem uma conta? <Link href="/" className='text-brand-primary font-medium '> Faça o login</Link>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
} 