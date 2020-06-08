const changeProductionItemYear5 = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_YEAR_5',
    year5: item.year5,
    id: item.id
  }
}

export default changeProductionItemYear5