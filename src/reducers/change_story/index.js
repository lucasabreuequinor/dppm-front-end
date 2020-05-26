import chFrom from './chFrom'
import chBy from './chBy'
import chTo from './chTo'


import {combineReducers} from 'redux' 

const chReducers = combineReducers({
  chFrom,
  chBy,
  chTo

})


export default chReducers