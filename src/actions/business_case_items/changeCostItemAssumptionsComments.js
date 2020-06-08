const changeCostItemAssumptionsComments = (item) => {
  return {
    type: 'CHANGE_COST_ITEM_ASSUMPTIONS_COMMENTS',
    assumptionsComments: item.assumptionsComments,
    id: item.id
  }
}

export default changeCostItemAssumptionsComments