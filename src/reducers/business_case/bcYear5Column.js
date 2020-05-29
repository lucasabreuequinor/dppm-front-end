import bcYear5ColumnSelected from './bcYear5ColumnSelected'
import bcYear5ColumnRange from './bcYear5ColumnRange'
import bcYear5ColumnStart from './bcYear5ColumnStart'

import { combineReducers } from 'redux'

const bcYear5Column = combineReducers({
  selected: bcYear5ColumnSelected,
  range: bcYear5ColumnRange,
  start: bcYear5ColumnStart
})

export default bcYear5Column