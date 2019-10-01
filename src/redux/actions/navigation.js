import * as types from '../constants/navigation';

export const navigate = route => {
    return {
        type: types.NAVIGATE,
        payload: {}
    }
}
