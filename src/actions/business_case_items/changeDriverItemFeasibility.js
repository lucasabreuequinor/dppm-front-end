const changeDriverItemFeasibility = (item) => {
  return {
    type: 'CHANGE_DRIVER_ITEM_FEASIBILITY',
    feasibility: item.feasibility,
    id: item.id
  }
}

export default changeDriverItemFeasibility