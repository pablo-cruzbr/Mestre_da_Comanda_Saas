import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.162.93:3333'
    //baseURL: 'http://localhost:3333'
})


export {api};