const deleteProductionItem = (item) => {
  return {
    type: 'DELETE_PRODUCTION_ITEM',
    id: item.id
  }
}

export default deleteProductionItem
