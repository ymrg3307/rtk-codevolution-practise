const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceccreamActions = require('./features/icecream/icecreamSlice').iceccreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => console.log('up state', store.getState()))

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3)) 

// store.dispatch(iceccreamActions.ordered())
// store.dispatch(iceccreamActions.ordered())
// store.dispatch(iceccreamActions.ordered())
// store.dispatch(iceccreamActions.restocked(5))

store.dispatch(fetchUsers())

// unsubscribe()