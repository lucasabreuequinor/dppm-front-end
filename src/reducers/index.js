import cpReducers from './create_project'
import chReducers from './change_story'
import sadReducers from './solution_and_data'
import bcReducers from './business_case'


import {combineReducers} from 'redux'

const allReducers = combineReducers({
  cpReducers,
  chReducers,
  sadReducers,
  bcReducers

})

export default allReducers