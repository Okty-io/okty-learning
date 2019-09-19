import * as type from '../constants/chapters';
import { API_URL } from '../../constants';

export const fetchAll = (dispatch) => {

    fetch(`${API_URL}/learning/chapters`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => dispatch(receiveAll(response)));

    return {
        type: type.FETCH_ALL,
        payload: {}
    };
};

export const receiveAll = chapters => {
    return {
        type: type.RECEIVE_ALL,
        payload: { chapters }
    }
};
