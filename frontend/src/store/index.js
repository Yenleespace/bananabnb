const rootReducer = combineReducers({
    teas: userReducer,
    transactions: transactionReducer,
    user: userReducer
});