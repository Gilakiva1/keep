// import { storgeService } from "../service/storage.service";

export function setLoggedInUser(loggedInUser) {
    return (dispatch) => {
        dispatch({ type: 'SET_LOGGED_IN_USER', loggedInUser })
        
    }
}