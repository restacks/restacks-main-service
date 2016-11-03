"use strict";
const redux_1 = require('redux');
const home_1 = require('../reducers/home');
exports.rootReducer = redux_1.combineReducers({ home: home_1.home });
