import bciYear1ColumnSelected from './bciYear1ColumnSelected'
import bciYear1ColumnRange from './bciYear1ColumnRange'
import bciYear1ColumnStart from './bciYear1ColumnStart'

import { combineReducers } from 'redux'

const bciYear1Column = combineReducers({
  selected: bciYear1ColumnSelected,
  range: bciYear1ColumnRange,
  start: bciYear1ColumnStart
})

export default bciYear1Column