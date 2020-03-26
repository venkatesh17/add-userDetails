import {combineReducers} from 'redux'

import createReducers from './create'
import getReducers from './read'
import deleteReducers from './delete'






export default combineReducers({
    createReducers, getReducers, deleteReducers
})

