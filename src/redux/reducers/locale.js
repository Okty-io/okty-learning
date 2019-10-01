import * as type from '../constants/locale.js';

const initialState = {
    locale: 'en_US'
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case type.UPDATE:
            return { ...state, locale: action.payload.locale };
        default:
            return state;
    }
}
