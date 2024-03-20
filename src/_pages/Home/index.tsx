import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";

import {v4 as uuid} from 'uuid'
import { useNotificationStore } from "../../_stores/notification";
import {    FaCalendarCheck ,
            FaArrowsAlt,
            FaBabyCarriage,
            FaBomb
          } from "react-icons/fa";
import { IconType } from "react-icons";
import { NotificationTypes } from "../../_interfaces/notification";



const Icons = [FaCalendarCheck,  FaArrowsAlt, FaBabyCarriage, FaBomb]
const Types: NotificationTypes[] = ["error","report", "success", "warning"]
function getIcon(): IconType{
    const y = Icons.length
    const x = 0
    const randomNumber = Math.floor(Math.random() * (y - x + 1)) + x;
    return Icons[randomNumber]
}

function getType(){
    const y = Types.length
    const x = 0
    const randomNumber = Math.floor(Math.random() * (y - x + 1)) + x;
    return Types[randomNumber]
}

export const Home = ()=>{
    const { user } = useAuth();
    const {addNotification} = useNotificationStore()

    return (!user ? 
        <div>
            <h1>Home</h1>
            <div style={{display:'flex', width:'15rem' ,flexDirection:'column', gap:'8px'}}>
               <button onClick={()=>{
                addNotification({
                    id: uuid(),
                    actions: {close: ()=>{}},
                    icon: getIcon(),
                    message: "aaaaaaaaa",
                    type: getType(),
                    isNotDismiss: Math.floor(Math.random()* 10) % 2 == 0
                })
               }}>Add</button>
            </div>
            
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}