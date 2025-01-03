// fetch todo
import {apiClient} from "../config/axios.ts";

export const fetchTodo = async () => {
    const response = await apiClient.get('/todos');
    return response.data;
};

