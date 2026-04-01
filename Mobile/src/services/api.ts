import axios from 'axios';

const api = axios.create({
  // Use o domínio principal da Vercel que aparece no seu print
  baseURL: 'https://mestre-da-comanda-saas.vercel.app'
});

export { api };