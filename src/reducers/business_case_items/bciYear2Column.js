import bciYear2ColumnSelected from './bciYear2ColumnSelected'
import bciYear2ColumnRange from './bciYear2ColumnRange'
import bciYear2ColumnStart from './bciYear2ColumnStart'

import { combineReducers } from 'redux'

const bciYear2Column = combineReducers({
  selected: bciYear2ColumnSelected,
  range: bciYear2ColumnRange,
  start: bciYear2ColumnStart
})

export default bciYear2Column