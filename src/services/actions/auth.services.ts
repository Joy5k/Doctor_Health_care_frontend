import { authKey } from "@/app/constants/authKey"
import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
    return setToLocalStorage(authKey, accessToken)
}