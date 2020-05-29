import bcYear1ColumnSelected from './bcYear1ColumnSelected'
import bcYear1ColumnRange from './bcYear1ColumnRange'
import bcYear1ColumnStart from './bcYear1ColumnStart'

import { combineReducers } from 'redux'

const bcYear1Column = combineReducers({
  selected: bcYear1ColumnSelected,
  range: bcYear1ColumnRange,
  start: bcYear1ColumnStart
})

export default bcYear1Column