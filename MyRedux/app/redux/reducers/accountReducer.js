import { ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from "../actions/types";
const initialState = {
    accountList: []
}
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            return {
                ...state,
                accountList: state.accountList.concat({
                    id: state.accountList.length + 1,
                    mail: action.mail,
                    key: action.key
                })

            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accountList: state.accountList.filter((item) =>
                    item.key !== action.key)
            };
        case EDIT_ACCOUNT:
             
            return {
                ...state,
                accountList: state.accountList.map((item) =>
                    item.mail = action.mail
                )
            };
        default:
            return state;
    }
}
export default accountReducer;