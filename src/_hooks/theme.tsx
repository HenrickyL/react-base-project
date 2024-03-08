import { createContext, useContext, useMemo, useState } from "react";
import GlobalStyle from "../globalCss"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

interface ThemeContextData {
    theme: Theme,
    toggle():void,
    changeToTheme(theme: 'dark'|'light'): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);


export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [theme, setTheme] = useState<Theme>(lightTheme)

    function toggle():void{
        changeToTheme(theme === lightTheme? 'dark' : 'light' )
    }

    function changeToTheme(theme: 'dark'|'light'): void{
        setTheme(theme === 'dark'? darkTheme : lightTheme)
    }
    
    const providerData = useMemo<ThemeContextData>(
        () => ({
            theme,
            toggle,
            changeToTheme
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={providerData}>
            <StyledThemeProvider theme={providerData.theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}


export const useTheme = () :ThemeContextData =>{
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('useTheme must be used within an ThemeProvider');
    return context;
}


interface ThemeSettings{
    fastTransition?: number,
    normalTransition: number,
    slowTransition?: number,
    iconSize: number,
  
  }
  interface ThemeNotification{
    success: string,
    warning: string,
    error: string,
    report: string,
  }
  
  interface ThemeInputsSettings{
    background: string
  }
  
  export interface Theme {
    text: string,
    text2?: string,
    text3?: string,
  
    contrast: string,
    contrastLight?: string,
  
    settings:ThemeSettings,
    input: ThemeInputsSettings,
  
    notification: ThemeNotification,
    background: string;
    backgroundSnd: string;
    backgroundTer: string;
    black: string;
    black2: string;
    black3: string;
    white: string;
    white2: string;
    white3: string;
    gray: string;
    primary: string;
    primaryLight?: string;
    secondary: string;
    secondaryLight?: string;
    tertiary?: string;
    tertiaryLight?: string;
  }
  
  export const lightTheme: Theme = {
    contrast: '#000',
    contrastLight: '#222',
    text: '#000',
    background: '#fff',
    backgroundSnd: '#dff0df',
    backgroundTer: '#F6B756ff',
    black: '#000',
    black2: '#3a3a3a',
    black3: '#5a5a5a',
    white: '#FEFFFE',
    white2: '#F0F0F0',
    white3: '#EFEFEF',
    gray: '#6C6C6D',
    primary: '#0f0',
    primaryLight: '#29fd53',
    secondary: '#926386ff',
    secondaryLight: '#936625ff',
    tertiary: '#FB8C50ff',
  
    input: {
      background: "#fff",
    },
    settings:{
      normalTransition: 400,
      iconSize: 20
    },
    notification:{
      success: '#2ecc71',
      warning: '#f39c12',
      error: '#e74c3c',
      report: '#3498db',
    }
  };
  
  export const darkTheme: Theme = {
    text: '#fff',
    contrast: '#fff',
    contrastLight: '#777',
    background: '#25252b',
    backgroundSnd: '#2a2d39',
    backgroundTer: '#666',
    black: '#000',
    black2: '#3a3a3a',
    black3: '#5a5a5a',
    white: '#FFF',
    white2: '#F0F0F0',
    white3: '#EFEFEF',
    gray: '#888',
    primary: '#0f0',
    primaryLight: '#3f3',
    secondary: '#5bc0de',
    secondaryLight: '#5bc0de',
    tertiary: '#5bc0de',
  
    settings:{
      normalTransition: 400,
      iconSize: 20
    },
    input:{
      background: '#4a5a4a'
    },
    notification:{
      success: '#2ecc71',
      warning: '#f39c12',
      error: '#e74c3c',
      report: '#3498db',
    }
  };
  