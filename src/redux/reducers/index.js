import { combineReducers } from 'redux';
import chaptersReducer from './chapters';
import localeReducer from './locale';

const reducers = combineReducers({
    chaptersReducer,
    localeReducer
});

export default reducers;
