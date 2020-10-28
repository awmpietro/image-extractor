import { EXTRACT_SUCCESS } from '../types';

type Action = { type: 'EXTRACT_SUCCESS'; payload: Array<any> };

interface Props {
    images: Array<any>;
}

const INITIAL_STATE: Props = { images: [] };

export default (state = INITIAL_STATE, action: Action): Props => {
    switch (action.type) {
        case EXTRACT_SUCCESS: {
            return {
                ...state,
                images: [...state.images, ...action.payload],
            };
        }
        default:
            return state;
    }
};
