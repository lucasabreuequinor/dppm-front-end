const bciYear4ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_4_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bciYear4ColumnRange