import io from 'socket.io-client';

import { spawnAlert } from './';
import { EXTRACT_SUCCESS } from '../types';

const URL = process.env.REACT_APP_SERVER_URL;
let socket;

const extract = (url: string) => {
    return () => {
        socket.emit('extract', { url });
    };
};

const extractSuccess = (payload: Record<string, unknown>) => ({
    type: EXTRACT_SUCCESS,
    payload,
});

const socketHandle = () => {
    return (dispatch) => {
        socket = io.connect(URL);
        socket.on('extractSuccess', (res) => {
            dispatch(extractSuccess(res));
        });
        socket.on('extractError', (res) => {
            dispatch(spawnAlert({ isError: true, message: res }));
        });
    };
};

const socketDisconnect = () => {
    return (dispatch) => {
        socket.disconnect();
    };
};

export { extract, extractSuccess, socketHandle, socketDisconnect };
