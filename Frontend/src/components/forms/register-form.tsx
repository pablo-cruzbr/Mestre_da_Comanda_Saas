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
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'

export function RegisterForm() {
  return (
    <div>
        <Card className="bg-app-card border-app-border w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-white text-center text-3xl font-bold tracking-tight">
                Mestre das <span className="text-brand-primary"> Comandas</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4"> 
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
                            Nome</Label>
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
                            Nome</Label>
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
                        Já tem uma conta? <Link href="/login"> Faça o login</Link>
                    </p>
                </form>
            </CardContent>
        </Card>
    </div>

    
  )
}
