const currentDate = new Date().getFullYear().toString()

const bcBaselineColumnSelected = (state = currentDate, action) => {
  switch(action.type){
    case 'CHANGE_BASELINE_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcBaselineColumnSelected