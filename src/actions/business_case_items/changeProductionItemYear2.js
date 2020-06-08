const changeProductionItemYear2 = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_YEAR_2',
    year2: item.year2,
    id: item.id
  }
}

export default changeProductionItemYear2