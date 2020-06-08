const changeRoleRequired = (resource) => {
  return {
    type: 'CHANGE_RESOURCE_ROLE_REQUIRED',
    role_required: resource.role_required,
    id: resource.id
  }
}

export default changeRoleRequired