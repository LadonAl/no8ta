import { createGlobalStyle } from "styled-components";
import UrbanistBlack from "./Urbanist/Urbanist-Black.woff2";
import UrbanistBlackItalic from "./Urbanist/Urbanist-BlackItalic.woff2";
import UrbanistSemiBoldItalic from "./Urbanist/Urbanist-SemiBoldItalic.woff2";
import UrbanistItalic from "./Urbanist/Urbanist-Italic.woff2";
import UrbanistExtraBold from "./Urbanist/Urbanist-ExtraBold.woff2";
import UrbanistBold from "./Urbanist/Urbanist-Bold.woff2";
import UrbanistExtraBoldItalic from "./Urbanist/Urbanist-ExtraBoldItalic.woff2";
import UrbanistRegular from "./Urbanist/Urbanist-Regular.woff2";
import UrbanistExtraLight from "./Urbanist/Urbanist-ExtraLight.woff2";
import UrbanistBoldItalic from "./Urbanist/Urbanist-BoldItalic.woff2";
import UrbanistExtraLightItalic from "./Urbanist/Urbanist-ExtraLightItalic.woff2";
import UrbanistMediumItalic from "./Urbanist/Urbanist-MediumItalic.woff2";
import UrbanistLight from "./Urbanist/Urbanist-Light.woff2";
import UrbanistLightItalic from "./Urbanist/Urbanist-LightItalic.woff2";
import UrbanistThinItalic from "./Urbanist/Urbanist-ThinItalic.woff2";
import UrbanistMedium from "./Urbanist/Urbanist-Medium.woff2";
import UrbanistSemiBold from "./Urbanist/Urbanist-SemiBold.woff2";
import UrbanistThin from "./Urbanist/Urbanist-Thin.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistBlack}) format("woff2");
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistBlackItalic}) format("woff2");
    font-style: italic;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistSemiBoldItalic}) format("woff2");
    font-style: italic;
    font-weight: 600;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistItalic}) format("woff2");
    font-style: italic;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistExtraBold}) format("woff2");
    font-weight: 800;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistBold}) format("woff2");
    font-weight: 700;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistExtraBoldItalic}) format("woff2");
    font-style: italic;
    font-weight: 800;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistRegular}) format("woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistExtraLight}) format("woff2");
    font-weight: 200;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistBoldItalic}) format("woff2");
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistExtraLightItalic}) format("woff2");
    font-style: italic;
    font-weight: 200;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistMediumItalic}) format("woff2");
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistLight}) format("woff2");
    font-weight: 300;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistLightItalic}) format("woff2");
    font-style: italic;
    font-weight: 300;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistThinItalic}) format("woff2");
    font-style: italic;
    font-weight: 100;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistMedium}) format("woff2");
    font-weight: 500;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistSemiBold}) format("woff2");
    font-weight: 600;
  }

  @font-face {
    font-family: "Urbanist";
    src: url(${UrbanistThin}) format("woff2");
    font-weight: 100;
  }
`;
