const addResource = (resource) => {

  return {
    type: 'ADD_RESOURCE',
    id: resource.id,
    resource_owner: resource.resource_owner,
    role_required: resource.role_required,
    name: resource.name,
    allocation: resource.allocation,
    start_date: resource.start_date,
    duration: resource.duration
  }
}

export default addResource
