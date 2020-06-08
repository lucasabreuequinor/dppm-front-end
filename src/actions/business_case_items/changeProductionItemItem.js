const changeProductionItemItem = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_ITEM',
    item: item.item,
    id: item.id
  }
}

export default changeProductionItemItem