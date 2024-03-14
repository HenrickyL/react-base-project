import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";
import { Notification } from "../../_components/Notification";

import { FaCheck as CheckIcon
} from "react-icons/fa";
import { MdOutlineClose as CloseIcon } from "react-icons/md";



export const Home = ()=>{
    const { user } = useAuth();

    return (!user ? 
        <div>
            <h1>Home</h1>
            <div>
                <Notification.Root>
                    <Notification.Icon  />
                    <Notification.Content text="text notification" />
                    <Notification.Actions>
                        <Notification.Action onClick={()=>{}} icon={CheckIcon}/>
                        <Notification.Action type="secondary" onClick={()=>{}} icon={CloseIcon}/>
                    </Notification.Actions>
                </Notification.Root>
            </div>
            
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}