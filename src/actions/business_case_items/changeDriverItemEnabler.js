const changeDriverItemEnabler = (item) => {
  return {
    type: 'CHANGE_DRIVER_ITEM_ENABLER',
    enabler: item.enabler,
    id: item.id
  }
}

export default changeDriverItemEnabler