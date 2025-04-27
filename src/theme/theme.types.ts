import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    json: {
      key: string;
      value: string;
      bracket: string;
      array: string;
    };
  }
  interface PaletteOptions {
    json?: {
      key?: string;
      value?: string;
      bracket?: string;
      array?: string;
    };
  }
} 