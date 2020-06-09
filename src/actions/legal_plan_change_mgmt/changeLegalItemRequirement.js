const changeLegalItemRequirement = (item) => {
  return {
    type: 'CHANGE_LEGAL_ITEM_REQUIREMENT',
    requirement: item.requirement,
    id: item.id
  }
}

export default changeLegalItemRequirement