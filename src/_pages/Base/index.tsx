import { Outlet } from "react-router-dom"
import { SideBar } from "../../_components/SideBar"
import { services } from "../../_middlewares/SideBarServices"
import { BaseDivSty, BaseSty } from "./style"
import { Header } from "../../_components/Header"
import { ThemeToggle } from "../../_components/ThemeToggle/index."
import { CurrentUser } from "../../_components/CurrentUser"
import {     CiLogout as ExitIcon
} from "react-icons/ci";
import { StateController } from "../../_middlewares/StateController"

export const Base = ()=>{
    function handleExit(){
        StateController.logoff()
    }
    return (
        <BaseSty>
            <SideBar.Root >
                <SideBar.Field>
                    {services.main.map((item, index)=>
                        <SideBar.Item key={`sb-i-m-${index}`} icon={item.icon} text={item.text} to={item.to} />
                        )}
                </SideBar.Field>

                <SideBar.Field>
                    {services.another.map((item, index)=>
                        <SideBar.Item key={`sb-i-a-${index}`} icon={item.icon} text={item.text} to={item.to} />
                    )}
                    <SideBar.Item key={`sb-exit`} onClick={handleExit} icon={ExitIcon} text={'Exit'} to={'/auth/login'} />
                </SideBar.Field>
            </SideBar.Root>
            <BaseDivSty>
                <Header.Root>
                    <Header.Field />
                    <Header.Logo>
                        <h1>Logo</h1>
                    </Header.Logo>
                    <Header.Field >
                        <CurrentUser /> 
                        <ThemeToggle />
                    </Header.Field>
                </Header.Root>
                <main>
                    <Outlet />
                </main>
            </BaseDivSty>
        </BaseSty>
    )
}