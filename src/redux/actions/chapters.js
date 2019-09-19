import * as type from '../constants/chapters';

export const fetchAll = () => {
    return {
        type: type.FETCH_ALL,
        payload: {}
    };
};
