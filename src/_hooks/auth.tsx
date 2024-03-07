import { createContext, useContext, useMemo, useState } from "react";
import { User } from "../_interfaces/user";
import { client} from '../_network/api'
import { StorageKeys, StorageMiddleware } from "../_middlewares/StorageMiddleware";

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
    const [user, setUser] = useState<User | null>(StorageMiddleware.getContent<User>(StorageKeys.USER))
    function signOut() {
        StorageMiddleware.removeContent(StorageKeys.USER)
        setUser(null);
    }
    async function signIn({ email, password }: AuthCredentials) {
        const { data } = await client.get<User[]>(`users?email=${email}`);

        if (data.length == 0 || data[0].password !== password) {
            throw new Error('Invalid credentials!');
        }
        const currentUser =data[0]
        StorageMiddleware.setContent<User>(StorageKeys.USER, currentUser)
        setUser(currentUser);
    }

    // memoize
    const providerData = useMemo(
        () => ({
            user,
            signIn,
            signOut
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={providerData}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () :AuthContextData =>{
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');
    return context;
}