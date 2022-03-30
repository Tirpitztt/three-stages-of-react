import {getData} from './api';

export const getDataReq = (func: (data: any[]) => void) => {
    getData().then((data) => {
        func(data);
    });
};
