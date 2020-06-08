const changeProductionItemAssumptionsComments = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_ASSUMPTIONS_COMMENTS',
    assumptionsComments: item.assumptionsComments,
    id: item.id
  }
}

export default changeProductionItemAssumptionsComments