import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3005/' });


export const fetchMemories = async () => API.get('/memories');

export const createMemory = async (newMemory) => {
    const { data } = await API.post('/memories', newMemory);
    console.log("data: ", data);

}









/* const API = axios.create({baseURL: 'http://localhost:3005'});

export const createMemory = async (newMemory) => {
     const data= await API.post('/memories', newMemory);
     console.log(data);
 } */

 //export {createMemory};