import { css } from "styled-components";
import { MaterialIconFontFace, MaterialIconsType } from "./typography.types";

export const generateMaterialIconsFontFaces = (
  material_icons: MaterialIconFontFace
) => {
  let css_string = "";
  const familyBaseName = "Material Icons";
  const getTypeName = (type: string) => {
    return material_icons[type as MaterialIconsType]?.mapped_name ?? ` ${type}`;
  };

  Object.keys(material_icons).forEach((type) => {
    const src = material_icons[type as MaterialIconsType]?.src;
    const typeFamilyName = `${familyBaseName}${
      getTypeName(type).length > 0 ? ` ${getTypeName(type)}` : ""
    }`;
    const typeClassName = `.material-icons${`${
      getTypeName(type).length > 0 ? "-" : ""
    }${getTypeName(type).toLocaleLowerCase()}`}`;
    const typeCss = `
		@font-face {
		  font-family: "${typeFamilyName}";
		  font-style: normal;
		  font-weight: 400;
		  src: url(${src}) ;
		}
		${typeClassName}{
		  font-family: "${typeFamilyName}";
		  font-weight: normal;
		  font-style: normal;
		  // font-size: 24px;
		  line-height: 1;
		  letter-spacing: normal;
		  text-transform: none;
		  display: inline-block;
		  white-space: nowrap;
		  word-wrap: normal;
		  direction: ltr;
		  -webkit-font-feature-settings: "liga";
		  -webkit-font-smoothing: antialiased;
		}
	  `;
    css_string += typeCss;
  });
  return css`
    ${css_string}
  `;
};
