import { ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from './types';
export const addAccount = (mail,  key) => (
    {
        type: ADD_ACCOUNT,
        mail: mail,
        key: key
    }
);
export const deleteAccount = (key) => (
    {
        type: DELETE_ACCOUNT,
        key : key,
    }
);
export const editAccount = (mail) => (
    {
        type: EDIT_ACCOUNT,
        mail: mail
    }
);