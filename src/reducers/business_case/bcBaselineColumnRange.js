const bcBaselineColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_BASELINE_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bcBaselineColumnRange