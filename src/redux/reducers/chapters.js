import * as type from '../constants/chapters';

const initialState = {
    chapters: [],
    error: null
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case type.RECEIVE_ALL:
            return { ...state, chapters: action.payload.chapters, error: null };
        case type.ERROR:
            return { ...state, chapters: [], error: action.payload.message };
        default:
            return state;
    }
};
