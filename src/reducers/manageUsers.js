export default function manageUsers(state = {users: []}, action){
  //
  // console.log("action TYPE is " + action.type)
  // // debugger
  // console.log("action user is " + action.user)
  //
  // console.log("state is " + state.users)
  switch(action.type){
    case("ADD_USER"):
      return({...state, users: [...state.users, action.user]})
    default:
      return state
  }
}
