import { COUNTER_CHANGE } from '../constants';
const initialState = {
    count: 0
};
const countReducer = (state = initialState, action) => {
console.log("🚀 ~ file: countReducer.js ~ line 6 ~ countReducer ~ action", action)
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
export default countReducer;