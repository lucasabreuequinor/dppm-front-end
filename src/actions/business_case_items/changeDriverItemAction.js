const changeDriverItemAction = (item) => {
  return {
    type: 'CHANGE_DRIVER_ITEM_DRIVER_ITEM_ACTION',
    driver_item_action: item.driver_item_action,
    id: item.id
  }
}

export default changeDriverItemAction