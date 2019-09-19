import * as type from '../constants/chapters';

const initialState = {
    chapters: [],
    error: null
};

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case type.RECEIVE_ALL:
            return { ...state, chapters: action.payload.chapters };
        default:
            return state;
    }
};

export default reducer;
