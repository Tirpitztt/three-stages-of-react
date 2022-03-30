import axios from 'axios';

export const getData = () => {
    const result = axios.get('http://localhost:3000/data').then((response) => {
        return response.data;
    });
    return result;
};

export const addData = (body: Record<string, unknown>) => {
    const result = axios.post('http://localhost:3000/data', body).then((response) => {
        return response;
    });
    return result;
};

export const searchData = (id: number) => {
    const result = axios.get(`http://localhost:3000/data?id=${id}`).then((response) => {
        return response.data;
    });
    return result;
};

export const updateData = (id: number, body: Record<string, unknown>) => {
    const result = axios.patch(`http://localhost:3000/data/${id}`, body).then((response) => {
        return response;
    });
    return result;
};

export const deleteData = (id: number) => {
    const result = axios.delete(`http://localhost:3000/data/${id}`).then((response) => {
        return response;
    });
    return result;
};
