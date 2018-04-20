export default function manageUsers(state = {users: []}, action){
  switch(action.type) {
    case 'ADD_USER':
      let new_user = action.user
      return {users: [...state.users, new_user]}

    default:
      return state
  }
}
