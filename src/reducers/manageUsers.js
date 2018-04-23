export default function manageUsers(state = {users: []}, action){

  action.user ? console.log(`action in reducer ${action.type} ${action.user.username} ${action.user.hometown}`) : console.log(`action ${action}`)

  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: state.users.concat(action.user) }

    default:
      return state
  }
}
 