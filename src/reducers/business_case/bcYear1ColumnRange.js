const bcYear1ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bcYear1ColumnRange