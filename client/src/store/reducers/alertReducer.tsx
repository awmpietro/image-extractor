import { DISMISS_ALERT, SPAWN_ALERT } from '../types';

type Action =
    | { type: 'DISMISS_ALERT'; payload: { isError: boolean; isSuccess: boolean; message: string } }
    | { type: 'SPAWN_ALERT'; payload: { isError: boolean; isSuccess: boolean; message: string } };

interface Props {
    isError: boolean;
    isSuccess: boolean;
    message: string;
}

const INITIAL_STATE: Props = { isError: false, isSuccess: false, message: '' };

export default (state = INITIAL_STATE, action: Action): Props => {
    switch (action.type) {
        case SPAWN_ALERT:
            return {
                ...state,
                isError: action.payload.isError,
                isSuccess: action.payload.isSuccess,
                message: action.payload.message,
            };
        case DISMISS_ALERT:
            return { ...state, isError: false, isSuccess: false, message: '' };
        default:
            return state;
    }
};
