import { emptyUser, API_PATH } from "./constants"
import { IUserSession } from "./types"

export const api = (route: string) => {
    return `${API_PATH}${route}`;
}

export const isEmail = (email: string) => {
    return email.match(/(\S+)@(\S+)\.(\S+)/) !== null
}

export const isFormFilled = (formValues: string[]) => {
    formValues.forEach((value) => {
        if (value === "") {
            return false
        }
    })

    return true
}

export const isUserLoggedIn = (userSession: IUserSession) => {
    return (userSession.token === "" || userSession.user === "")
}

export const handleUserSession = () => {
    const user = window.localStorage.getItem("user");
    if (!user) {
        return emptyUser;
    }

    const userSession = JSON.parse(user);
    if (userSession.expires < Date.now()) {
        return emptyUser;
    } else {
        return userSession;
    }
}

export const logoutUser = () : IUserSession => {
    window.localStorage.removeItem("user");
    return emptyUser;
}
