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
export function RegisterForm() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>
                Mestre das <span className="text-brand-primary"> Comandas</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <Label htmlFor='name'>Nome</Label>
                        <Input type='text' id='name' placeholder='Digite seu nome'></Input>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}
