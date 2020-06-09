import lpcmLegalItems from './lpcmLegalItems'
import lpcmChangeMgmtItems from './lpcmChangeMgmtItems'


import {combineReducers} from 'redux' 


const lpcmItems = combineReducers({
  lpcmLegalItems,
  lpcmChangeMgmtItems
})


export default lpcmItems