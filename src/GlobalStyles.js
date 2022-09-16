import { injectGlobal } from "vue3-styled-components";

const injectGlobalStyles = () => {
  return injectGlobal`
    @font-face {
      font-family: 'Inter';
      src: url('./src/assets/fonts/Inter/Inter-Light.ttf') format('truetype');
      font-style: normal;
      font-weight: 300;
    };

    @font-face {
      font-family: 'Inter';
      src: url('./src/assets/fonts/Inter/Inter-Regular.ttf') format('truetype');
      font-style: normal;
      font-weight: 400;
    };

    @font-face {
      font-family: 'Inter';
      src: url('./src/assets/fonts/Inter/Inter-Medium.ttf') format('truetype');
      font-style: normal;
      font-weight: 500;
    };

    @font-face {
      font-family: 'Inter';
      src: url('./src/assets/fonts/Inter/Inter-SemiBold.ttf') format('truetype');
      font-style: normal;
      font-weight: 600;
    };

    @font-face {
      font-family: 'Inter';
      src: url('./src/assets/fonts/Inter/Inter-Bold.ttf') format('truetype');
      font-style: normal;
      font-weight: 700;
    };

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    };

    body {
      font-family: Inter, sans-serif;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    };
  `;
};

export default injectGlobalStyles;
