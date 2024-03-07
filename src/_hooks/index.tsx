import {AuthProvider} from './auth';
import {ThemesProvider} from './theme';


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <AuthProvider>
            <ThemesProvider>
                {children}
            </ThemesProvider>
        </AuthProvider>
    )
}