import bcYear2ColumnSelected from './bcYear2ColumnSelected'
import bcYear2ColumnRange from './bcYear2ColumnRange'
import bcYear2ColumnStart from './bcYear2ColumnStart'

import { combineReducers } from 'redux'

const bcYear2Column = combineReducers({
  selected: bcYear2ColumnSelected,
  range: bcYear2ColumnRange,
  start: bcYear2ColumnStart
})

export default bcYear2Column