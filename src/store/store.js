import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { noteReducer } from './note.reducer';
import { userReducer } from './user.reducer'

const rootReducer = combineReducers({
    noteModule: noteReducer,
    userModule: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
