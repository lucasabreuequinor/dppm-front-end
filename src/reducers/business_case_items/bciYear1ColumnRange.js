const bciYear1ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bciYear1ColumnRange