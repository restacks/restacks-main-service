import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// Import reducers
import { HomeState, home } from '../reducers/home';



export type AppStore = {
    home: HomeState
}
export const rootReducer = combineReducers<AppStore>({home})
