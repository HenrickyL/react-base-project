import { Input } from "../../_components/Input";
import { useAuth } from "../../_hooks/auth";

export const Home = ()=>{
    const { user } = useAuth();
    return (!user ? 
        <div>
            <Input.Root>
                <Input.Field>
                    <Input.Label htmlFor="password" text="Password"/>
                    <Input.Password/>
                </Input.Field>
            </Input.Root>
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}