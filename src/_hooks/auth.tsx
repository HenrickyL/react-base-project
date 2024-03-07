import { createContext, useContext, useState } from "react";
import { User } from "../_interfaces/user";
import { client} from '../_network/api'

interface AuthCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User | null;
    signIn(credentials: AuthCredentials): void;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* ---------------------- */

export const AuthProvider = ( {children}:{ children: React.ReactNode})=>{
    const [user, setUser] = useState<User | null>()
}

export const userAuth = () :AuthContextData =>{
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');
    return context;
}