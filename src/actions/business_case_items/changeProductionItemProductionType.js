const changeProductionItemProductionType = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_PRODUCTION_TYPE',
    production_type: item.production_type,
    id: item.id
  }
}

export default changeProductionItemProductionType