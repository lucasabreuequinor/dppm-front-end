const deleteResource = (resource) => {
  return {
    type: 'DELETE_RESOURCE',
    id: resource.id
  }
}

export default deleteResource
