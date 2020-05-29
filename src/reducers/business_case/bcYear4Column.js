import bcYear4ColumnSelected from './bcYear4ColumnSelected'
import bcYear4ColumnRange from './bcYear4ColumnRange'
import bcYear4ColumnStart from './bcYear4ColumnStart'

import { combineReducers } from 'redux'

const bcYear4Column = combineReducers({
  selected: bcYear4ColumnSelected,
  range: bcYear4ColumnRange,
  start: bcYear4ColumnStart
})

export default bcYear4Column