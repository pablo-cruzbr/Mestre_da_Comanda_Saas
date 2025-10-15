'use client'
import Link from "next/link";
import styles from './styles.module.scss';
import Image from "next/image";
import logoImg from "../../../../../public/logo2.svg"
import {LogOutIcon} from "lucide-react"
import { deleteCookie } from "cookies-next";
import {useRouter} from "next/navigation"
import {toast} from 'sonner'
export function Header(){

    const router = useRouter();

    //Criar a Funcionalidade de Logout
    async function handleLogout(){
        //queremos deletar o session: que é nome,identificador que demos ao cookie.
        //Passar a rota
        deleteCookie("session", {path: "/"})

        //Depois que deletar vamos substituir nossa dashboard para a rota inicial que é a de login. (signin)
        toast.success("Logout Feito com Sucesso !")
        router.replace("/")
    }
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image
                        alt=""
                        src={logoImg}
                        width={190}
                        height={60}
                        //Prioridade de carregamento
                        priority={true}
                        quality={100}
                    />
                </Link>
                <nav>
                    <Link href="/dashboard/category">
                    Categoria
                    </Link>
                    <Link href="/dashboard/product">
                    Produtos
                    </Link>

                    <form action={handleLogout}>
                        <button>
                            <LogOutIcon size={24} />
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}