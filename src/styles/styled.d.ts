import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      primary: string;
      grey_100: string;
      grey_200: string;
      grey_800: string;
    };

    fonts: {
      body: string;
    };
  }
}
