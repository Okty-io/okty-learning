import * as type from '../constants/chapters';

const initialState = {
    chapters: []
};

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case type.FETCH_ALL:
            return { ...state, chapters: [1, 2, 3] };
        default:
            return state;
    }
};

export default reducer;
