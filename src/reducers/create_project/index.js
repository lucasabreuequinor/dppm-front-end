import cpName from './cpName'
import cpLeader from './cpLeader'
import cpDigitalProgramme from './cpDigitalProgramme'

import {combineReducers} from 'redux' 

const cpReducers = combineReducers({
  cpName,
  cpLeader,
  cpDigitalProgramme
})


export default cpReducers