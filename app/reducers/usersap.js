const initState = {
    userList: [],
    unlockStatus: '',
    userSap: ''
}

const userSapReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UNLOCK_STATUS':
            return {
                ...state,
                unlockStatus: action.payload.unlockStatusParam
            }
        case 'USER_SAP_CHANGE':
            return{
                ...state,
                userSap: action.payload.userSapParam
            }
        case 'FETCH_USER_LIST':
            return {
                ...state,
                userList: action.payload.userlist
            }
        default:
            return state
    }
}

export default userSapReducer