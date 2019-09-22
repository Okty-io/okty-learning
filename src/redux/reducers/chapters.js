import * as type from '../constants/chapters';

const initialState = {
    chapters: [],
    currentChapter: {},
    error: null
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case type.RECEIVE_ALL:
            return { ...state, chapters: action.payload.chapters, error: null };
        case type.FETCH_ONE:
            return { ...state, currentChapter: {}, error: null };
        case type.RECEIVE_ONE:
            return { ...state, currentChapter: action.payload.chapter };
        case type.ERROR:
            return { ...state, chapters: [], error: action.payload.message };
        default:
            return state;
    }
};
