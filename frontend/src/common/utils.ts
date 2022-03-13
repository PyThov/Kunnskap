import { API_PATH } from "./constants"

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
