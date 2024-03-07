import { useEffect, useState } from "react"
import { CurrentUserSty, UserImageSty } from "./style"
import { StateController, User } from "../../_middlewares/StateController"
import { Link, useNavigate } from "react-router-dom"
import { StringMiddleWare } from "../../_middlewares/StringMiddleware"

export const CurrentUser = ()=>{
    const [current, setCurrent] = useState<User | null>(StateController.getCurrentUser())
    const navigate = useNavigate()
    useEffect(()=>{
        setCurrent(StateController.getCurrentUser())
        // setCurrent(StateController.getToTest())
    },[current])

    function handleClick(){
        navigate('/profile')
    }
    return (
        <>
        {current ?
            <CurrentUserSty onClick={handleClick}>
                <span>{StringMiddleWare.NameUpperFirst(current.username)}</span>
                    <UserImageSty>
                        <img src={current.imageUrl} alt={`${current.username} profile image`} />
                    </UserImageSty>
            </CurrentUserSty> :
            <CurrentUserSty >
                <Link to={'/auth/login'}>Sign-in</Link>
            </CurrentUserSty>
    
        }
        </>
    )
}