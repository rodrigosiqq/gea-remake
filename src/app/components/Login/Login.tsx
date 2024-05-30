'use client'

import Image from "next/image";
import LoginImage from "../../../../public/LOGO-LOGIN.png"
import SubmitImage from "../SvgCompoents/SubmitImage";
import LogoGea from "../SvgCompoents/LogoGea";
import { SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export  default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const router = useRouter()

    async function handleSubmit(event: SyntheticEvent){
        event.preventDefault()

        const result = await signIn('credentials',{
            email,
            password,
            redirect: false
        })
        if(result?.error){
            console.log(result)
        return
        }
        //replace apaga todo o histórico acessado na navegação da aplicação evitando retornos em "voltar"
        router.replace('/SysGea/DashBoard')

    }


    return (
        <main className="h-screen w-3/4 bg-[#D9D9D9] border-4 rounded-xl flex justify-center items-center mx-auto">
            <div className="flex flex-row justify-between gap-32">
                <div>
                    <Image
                        src={LoginImage}
                        alt="Logo Fundação Gestão Hospitalar"
                        width={230}
                    />
                </div>
                <div className="bg-[#B0B0B0] rounded-xl w-[320px] flex flex-col items-center justify-center gap-4 ">
                    <LogoGea />
                    
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 ">
                        Usuário:
                        <input name="email" id="user" placeholder="digite o email" onChange={(e)=>setEmail(e.target.value)} className="w-60 rounded-lg text-center border focus:outline-slate-400 " type="text" />
                        Senha:
                        <input name="password" id="current-password" placeholder="Digite sua Senha" onChange={(e)=>setPassword(e.target.value)} className="w-60 rounded-lg mb-3 text-center focus:outline-slate-400 " type="password" />
                        <button type="submit" className="transition hover:opacity-50">
                            <SubmitImage />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}