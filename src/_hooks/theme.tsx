import { useEffect, useMemo, useState } from "react";
import GlobalStyle from "../globalCss"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Theme, ThemeController } from "../_middlewares/Themes";


interface ThemeContextData {
    theme: Theme;
}

export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [theme, setTheme] = useState<Theme>(ThemeController.getTheme())

    //TODO: Resolve use setDispatchTheme
    useEffect(()=>{
        ThemeController.setDispatchTheme(setTheme)
    },[])
    
    const providerData = useMemo<ThemeContextData>(
        () => ({
            theme,
        }),
        [theme]
    );
    return (
        <StyledThemeProvider theme={providerData.theme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    )
}