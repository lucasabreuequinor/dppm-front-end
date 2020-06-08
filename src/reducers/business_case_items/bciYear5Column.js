import bciYear5ColumnSelected from './bciYear5ColumnSelected'
import bciYear5ColumnRange from './bciYear5ColumnRange'
import bciYear5ColumnStart from './bciYear5ColumnStart'

import { combineReducers } from 'redux'

const bciYear5Column = combineReducers({
  selected: bciYear5ColumnSelected,
  range: bciYear5ColumnRange,
  start: bciYear5ColumnStart
})

export default bciYear5Column