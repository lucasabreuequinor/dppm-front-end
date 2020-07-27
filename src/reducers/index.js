import cpReducers from './create_project'
import chReducers from './change_story'
import sadReducers from './solution_and_data'
import bcReducers from './business_case'
import bciReducers from './business_case_items'
import rpReducers from './resource_plan'
import rrReducers from './risk_register'
import lpcmReducers from './legal_plan_change_mgmt'
import ppReducers from './project_plan'
import canvasReducers from './canvas'


import {combineReducers} from 'redux'

const allReducers = combineReducers({
  cpReducers,
  chReducers,
  sadReducers,
  bcReducers,
  bciReducers,
  rpReducers,
  rrReducers,
  lpcmReducers,
  ppReducers,
  canvasReducers

})

export default allReducers