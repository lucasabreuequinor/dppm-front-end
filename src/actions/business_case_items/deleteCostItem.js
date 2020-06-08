const deleteCostItem = (item) => {
  return {
    type: 'DELETE_COST_ITEM',
    id: item.id
  }
}

export default deleteCostItem
