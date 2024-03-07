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


export abstract class ThemeController{ 
  private static _currentTheme: Theme = darkTheme
  private static _isLight : boolean = false
  private static _dispatch: React.Dispatch<React.SetStateAction<Theme>> | null = null
  public static getTheme(): Theme {
    return ThemeController._currentTheme
  }

  public static toggle():void{
    ThemeController._isLight = !ThemeController._isLight
    ThemeController.setTheme(ThemeController._isLight ? 'light' : 'dark')
  }

  public static setDispatchTheme(value: React.Dispatch<React.SetStateAction<Theme>>):void{
    ThemeController._dispatch = value
  }


  public static setTheme(value : 'dark' | 'light'):void{
    if(value === 'dark'){
      ThemeController._currentTheme = darkTheme
    }else{
      ThemeController._currentTheme = lightTheme
    }
    if(ThemeController._dispatch){
      ThemeController._dispatch(ThemeController._currentTheme)
    }
  }
}