import axios from 'axios';

export const getData = () => {
    const result = axios.get('http://localhost:3000/data').then((response) => {
        return response.data;
    });
    return result;
};

export const addData = (body: Record<string, unknown>) => {
    axios.post('http://localhost:3000/data', body);
};

export const searchData = (id: number) => {
    const result = axios.get(`http://localhost:3000/data?id=${id}`).then((response) => {
        return response.data;
    });
    return result;
};

export const updateData = (id: number, body: Record<string, unknown>) => {
    axios.patch(`http://localhost:3000/data/${id}`, body);
};

export const deleteData = (id: number) => {
    axios.delete(`http://localhost:3000/data/${id}`);
};
