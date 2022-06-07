import axios from 'axios';


const api = axios.create({baseURL: 'http://localhost:3005'});

export const fetchMemories = async ()=> api.get('/memories');

export const createMemory = async (newMemory) => {
    const data = await api.post('/memories', newMemory);
    console.log("data: ", data);
    
}










/* const API = axios.create({baseURL: 'http://localhost:3005'});

export const createMemory = async (newMemory) => {
     const data= await API.post('/memories', newMemory);
     console.log(data);
 } */

 //export {createMemory};