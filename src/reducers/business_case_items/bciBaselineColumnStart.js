import { currentYear } from './constants'

const bciBaselineColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_BASELINE_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bciBaselineColumnStart