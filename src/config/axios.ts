import * as axios from "axios";


// @ts-ignore
export const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});


