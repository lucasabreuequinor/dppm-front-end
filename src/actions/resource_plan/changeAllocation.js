const changeAllocation = (resource) => {
  return {
    type: 'CHANGE_RESOURCE_ALLOCATION',
    allocation: resource.allocation,
    id: resource.id

  }
}

export default changeAllocation