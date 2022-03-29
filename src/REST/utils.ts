import {getData} from './api';
import {AxiosResponse} from 'axios';

export const getDataReq = (func: (data: any[]) => void) => {
    getData().then((data) => {
        func(data);
    });
};
