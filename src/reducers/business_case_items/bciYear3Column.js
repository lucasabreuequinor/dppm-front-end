import bciYear3ColumnSelected from './bciYear3ColumnSelected'
import bciYear3ColumnRange from './bciYear3ColumnRange'
import bciYear3ColumnStart from './bciYear3ColumnStart'

import { combineReducers } from 'redux'

const bciYear3Column = combineReducers({
  selected: bciYear3ColumnSelected,
  range: bciYear3ColumnRange,
  start: bciYear3ColumnStart
})

export default bciYear3Column