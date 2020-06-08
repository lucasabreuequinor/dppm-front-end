import bciYear4ColumnSelected from './bciYear4ColumnSelected'
import bciYear4ColumnRange from './bciYear4ColumnRange'
import bciYear4ColumnStart from './bciYear4ColumnStart'

import { combineReducers } from 'redux'

const bciYear4Column = combineReducers({
  selected: bciYear4ColumnSelected,
  range: bciYear4ColumnRange,
  start: bciYear4ColumnStart
})

export default bciYear4Column