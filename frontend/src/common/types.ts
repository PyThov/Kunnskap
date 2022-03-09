export interface IUserSession {
    "user": string;
    "token": string;
    "expires": Date;
    "error": string;
    "errorField": string;
}