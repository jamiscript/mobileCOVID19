export const LOGGED_IN = `api/token/LOGGED_IN`;
export const LOGGED_OUT = `api/token/LOGGED_OUT`;

export const initialState = {
    isLoggedIn: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGED_IN: {
            let {user} = action;
            return {...state, isLoggedIn: true, user};
        }

        case LOGGED_OUT: {
            return {...state, ...initialState};
        }

        default: 
            return state;
    }
};

export default authReducer;