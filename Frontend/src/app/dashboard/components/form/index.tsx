"use client";

import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/app/dashboard/components/button';
import { api } from '@/services/api';
import { getCookieClient } from '@/lib/cookieClient';
import { AxiosError } from 'axios';
import {toast} from 'sonner'
import {useRouter} from 'next/navigation'

//3 - Redirecionar o usuário para pagina dashboard
import { redirect } from 'next/navigation';

interface CategoryProps {
  id: string;
  name: string;
}

interface Props {
  categories: CategoryProps[]
}

export function Form({ categories }: Props) {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState("");
  //Função para registrar o produto
  async function handleRegisterProduct(formData: FormData) {
    
    //Pegar o que quero Enviar pelo name de cada input
    const categoryIndex = formData.get("category");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    //Definir uma condição caso não preencha um dos inputs
    if (!name || !categoryIndex || !price || !description || !image) {
      toast.warning('Preencha todos os campos corretamente!')
      return;
    }

    // Acessar a posição da categoria pelo index
    console.log(categories[Number(categoryIndex)]);
    const category = categories[Number(categoryIndex)];


    //Condicional caso a categoria não seja encontrada
  if (!category) {
    console.log('Categoria não encontrada!');
    return;
  }

  console.log('Categoria selecionada:', category);


//Envio das propriedades que quero Enviar
 const data = new FormData();
 data.append("name", name as string);
 data.append("price", price as string);
 data.append("description", description as string);
 data.append("category_id", categories[Number(categoryIndex)].id)
 data.append("file", image);

 const token = getCookieClient();
 console.log("Token do usuário:", token);

 //Fazer a requisição, registrar o usuário ao nosso banco
 try {
   console.log("Enviando dados para o servidor:", data);
   const response = await api.post("/product", data, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   });
 } catch (err: unknown) {
   if (err instanceof AxiosError) {
     console.error("Erro ao cadastrar o produto:", err.response?.data || err.message);
   } 
 }

 toast.success("Produto Cadastrado com sucesso !!!")
 router.push('/dashboard')
  }

  // Função para lidar com o upload da imagem
  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      //Condição para caso o usuário não envia imagens nos seguintes formator: jpeg ou png
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        toast.warning("Formato de arquivo não permitido !")
        console.log("Formato de imagem inválido! Apenas JPEG e PNG são permitidos.");
        return;
      }

      setImage(file); // Armazenando a imagem
      setPreviewImage(URL.createObjectURL(file)); // Gerando o preview da imagem
    }
  }

  return (
    <main className={styles.container}>
      <h1>Cadastrar Produto</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          handleRegisterProduct(formData);
        }}
      >
        <label className={styles.labelImage}>
          <span>
            <UploadCloud size={30} color="#FFF" />
          </span>
          <input
            type="file"
            name="file"
            accept="image/png, image/jpeg"
            onChange={handleFile}
          />
          {previewImage && (
            <Image
              alt="Imagem de preview"
              src={previewImage}
              className={styles.preview}
              fill={true}
              quality={100}
              priority={true}
            />
          )}
        </label>

        <select name="category">
          {categories.map((category, index) => (
            <option key={category.id || index} value={index}>
              {category.name}
            </option>
            
          ))}

        </select>

        <input
          type="text"
          name="name"
          placeholder="Digite o nome do produto..."
          required
          className={styles.input}
        />

        <input
          type="text"
          name="price"
          placeholder="Preço do produto..."
          required
          className={styles.input}
        />

        <textarea
          className={styles.input}
          placeholder="Digite a descrição do produto..."
          required
          name="description"
        ></textarea>

        <Button name="Cadastrar produto" />
      </form>
    </main>
  );
}
