import bcYear3ColumnSelected from './bcYear3ColumnSelected'
import bcYear3ColumnRange from './bcYear3ColumnRange'
import bcYear3ColumnStart from './bcYear3ColumnStart'

import { combineReducers } from 'redux'

const bcYear3Column = combineReducers({
  selected: bcYear3ColumnSelected,
  range: bcYear3ColumnRange,
  start: bcYear3ColumnStart
})

export default bcYear3Column