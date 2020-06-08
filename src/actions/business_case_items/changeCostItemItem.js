const changeCostItemItem = (item) => {
  return {
    type: 'CHANGE_COST_ITEM_ITEM',
    item: item.item,
    id: item.id
  }
}

export default changeCostItemItem