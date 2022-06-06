import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3005'});

export const createMemory = async (newMemory) => {
     const data= await API.post('/memories', newMemory);
     console.log(data);
 }

 //export {createMemory};