const bcYear3ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_3_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bcYear3ColumnRange