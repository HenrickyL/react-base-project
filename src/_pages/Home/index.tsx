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
            <div style={{display:'flex', width:'15rem' ,flexDirection:'column', gap:'8px'}}>
                <Notification.Root type="warning">
                    <Notification.Icon  />
                    <Notification.Content text="text notification" />
                    <Notification.Actions>
                        <Notification.Action onClick={()=>{}} icon={CheckIcon}/>
                        <Notification.Action type="secondary" onClick={()=>{}} icon={CloseIcon}/>
                    </Notification.Actions>
                </Notification.Root>

                <Notification.Root type="success">
                    <Notification.Icon  />
                    <Notification.Content text="text notification" />
                </Notification.Root>

                <Notification.Root type="error">
                    <Notification.Icon  />
                    <Notification.Content text="text notification" />
                    <Notification.Actions>
                        <Notification.Action type="secondary" onClick={()=>{}} icon={CloseIcon}/>
                    </Notification.Actions>
                </Notification.Root>

                <Notification.Root>
                    <Notification.Content text="text notification" />
                </Notification.Root>
            </div>
            
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}