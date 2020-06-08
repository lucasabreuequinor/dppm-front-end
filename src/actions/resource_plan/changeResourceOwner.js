const changeResourceOwner = (resource) => {
  return {
    type: 'CHANGE_RESOURCE_RESOURCE_OWNER',
    resource_owner: resource.resource_owner,
    id: resource.id,
  }
}

export default changeResourceOwner