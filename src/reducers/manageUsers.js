export default function manageUsers(state = {users: []}, action){
  switch (action.type) {
    case 'ADD_USER':
      let newData = {users: [...state.users, action.user]}
      return newData
    default:
      return state
  }
}
