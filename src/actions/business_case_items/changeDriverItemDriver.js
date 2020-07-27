const changeDriverItemDriver = (item) => {
  return {
    type: 'CHANGE_DRIVER_ITEM_DRIVER',
    driver: item.driver,
    id: item.id
  }
}

export default changeDriverItemDriver