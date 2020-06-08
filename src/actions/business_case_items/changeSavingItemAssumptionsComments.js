const changeSavingItemAssumptionsComments = (item) => {
  return {
    type: 'CHANGE_SAVING_ITEM_ASSUMPTIONS_COMMENTS',
    assumptionsComments: item.assumptionsComments,
    id: item.id
  }
}

export default changeSavingItemAssumptionsComments