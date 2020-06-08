import bciBaselineColumnSelected from './bciBaselineColumnSelected'
import bciBaselineColumnRange from './bciBaselineColumnRange'
import bciBaselineColumnStart from './bciBaselineColumnStart'

import { combineReducers } from 'redux'

const bciBaselineColumn = combineReducers({
  selected: bciBaselineColumnSelected,
  range: bciBaselineColumnRange,
  start: bciBaselineColumnStart
})

export default bciBaselineColumn