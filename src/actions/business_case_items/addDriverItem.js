const addCostItem = (item) => {

  return {
    type: 'ADD_DRIVER_ITEM',
    id: item.id,
    driver: item.driver,
    enabler: item.enabler,
    driver_item_action: item.driver_item_action,
    feasibility: item.feasibility
  }
}

export default addCostItem
