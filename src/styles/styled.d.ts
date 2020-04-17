import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      primary: string;
    };

    fonts: {
      body: string;
    };
  }
}
