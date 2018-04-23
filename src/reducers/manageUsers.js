export default function manageUsers(state = {users: []}, action) {
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding user now');
      console.log('state is', state);
      return {...state, users: [...state.users, action.user]}
      break;
    default:
      return state
  }
}
