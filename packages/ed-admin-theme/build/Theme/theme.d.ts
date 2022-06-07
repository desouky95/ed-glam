import React from "react";
import { CSSPseudos } from "styled-components";
export declare type ExtraColor = "cadet" | "slateBlue" | "mayaBlue" | "darkPurple" | "dodgerBlue" | "uranianBlue" | "purple" | "tuftsBlue" | "orange" | "yellow" | "platinum";
declare type ColorType = "color" | `${string}Color` | "border";
export declare type ThemePropsBase = CSSPseudos & {
    [Key in keyof React.CSSProperties & string as `ed${Key}`]?: Key extends ColorType ? ExtraColor : React.CSSProperties[Key];
};
interface VariantBase extends React.CSSProperties, CSSPseudos {
}
interface EdThemeOptions {
    buttons: {
        contained: {
            [key in ExtraColor]?: VariantBase;
        };
    };
}
declare module "styled-components" {
    interface DefaultTheme extends EdThemeOptions {
    }
}
declare const theme: EdThemeOptions;
export { theme };
