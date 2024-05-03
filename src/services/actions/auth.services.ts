import { authKey } from "@/app/constants/authKey"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
    return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey)
    if (authToken) {
        const decoded:any = decodedToken(authToken)
        return{
            ... decoded,
            role:decoded.role.toLowerCase()
        }
    }
    
}
export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
       return !!authToken;
    }
};

export const removeUser = () => {
    return removeFromLocalStorage(authKey);
 };