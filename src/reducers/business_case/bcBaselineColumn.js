import bcBaselineColumnSelected from './bcBaselineColumnSelected'
import bcBaselineColumnRange from './bcBaselineColumnRange'
import bcBaselineColumnStart from './bcBaselineColumnStart'

import { combineReducers } from 'redux'

const bcBaselineColumn = combineReducers({
  selected: bcBaselineColumnSelected,
  range: bcBaselineColumnRange,
  start: bcBaselineColumnStart
})

export default bcBaselineColumn