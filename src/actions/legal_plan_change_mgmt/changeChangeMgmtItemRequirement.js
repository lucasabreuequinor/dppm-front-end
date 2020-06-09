const changeChangeMgmtItemRequirement = (item) => {
  return {
    type: 'CHANGE_CHANGE_MGMT_ITEM_REQUIREMENT',
    requirement: item.requirement,
    id: item.id 
  }
}

export default changeChangeMgmtItemRequirement