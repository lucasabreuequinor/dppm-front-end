const deleteDriverItem = (item) => {
  return {
    type: 'DELETE_DRIVER_ITEM',
    id: item.id
  }
}

export default deleteDriverItem
