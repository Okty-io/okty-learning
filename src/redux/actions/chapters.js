import * as type from '../constants/chapters';
import { API_URL, API_AJAX_HEADERS } from '../../constants';

export const receiveAll = chapters => {
    return {
        type: type.RECEIVE_ALL,
        payload: { chapters }
    }
};

export const receiveOne = chapter => {
    return {
        type: type.RECEIVE_ONE,
        payload: { chapter }
    }
};

export const error = message => {
    return {
        type: type.ERROR,
        payload: { message }
    }
};

export const fetchAll = (dispatch, locale = 'en_US') => {

    const queryString = `?lang=${locale}`;

    fetch(`${API_URL}/learning/chapters${queryString}`, API_AJAX_HEADERS)
        .then(response => response.json())
        .then(response => dispatch(receiveAll(response)))
        .catch(() => dispatch(error('Cannot fetch chapters')));

    return {
        type: type.FETCH_ALL,
        payload: {}
    };
};

export const fetchOne = (dispatch, id) => {

    fetch(`${API_URL}/learning/chapters/${id}`, API_AJAX_HEADERS)
        .then(response => response.json())
        .then(response => dispatch(receiveOne(response)))
        .catch(() => dispatch(error('Cannot fetch chapter')));

    return {
        type: type.FETCH_ONE,
        payload: {}
    };
};
