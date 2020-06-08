const changeDuration = (resource) => {
  return {
    type: 'CHANGE_RESOURCE_DURATION',
    duration: resource.duration,
    id: resource.id

  }
}

export default changeDuration