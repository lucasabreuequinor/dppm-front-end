import { currentYear } from './constants'

const bciBaselineColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_BASELINE_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bciBaselineColumnSelected