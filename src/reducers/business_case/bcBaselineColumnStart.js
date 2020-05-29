import { currentYear } from './constants'

const bcBaselineColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_BASELINE_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bcBaselineColumnStart