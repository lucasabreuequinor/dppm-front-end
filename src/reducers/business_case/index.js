import bcKeyAssumptions from './bcKeyAssumptions'
import bcReviewedByOPAFC  from './bcReviewedByOPAFC'
import bcReviewer  from './bcReviewer'
import bcApprovedBy  from './bcApprovedBy'
import bcKPIs  from './bcKPIs'


import {combineReducers} from 'redux' 


const bcReducers = combineReducers({
  bcKeyAssumptions,
  bcReviewedByOPAFC,
  bcReviewer,
  bcApprovedBy,
  bcKPIs

})


export default bcReducers