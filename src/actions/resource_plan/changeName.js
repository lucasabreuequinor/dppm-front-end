const changeName = (resource) => {
  return {
    type: 'CHANGE_RESOURCE_NAME',
    name: resource.name,
    id: resource.id

  }
}

export default changeName