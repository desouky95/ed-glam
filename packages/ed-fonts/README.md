
# @eduact/ed-fonts

A small helper library for embedding Some google fonts and others  onto your page.

## Installation

Install @eduact/ed-fonts with npm

```bash
  npm install @eduact/ed-fonts
```
    
## Fonts Available

- AvantGarde
- Cairo
- Montserrat
- Mulish
- MaterialIcons


## Usage/Examples

```javascript
import { AvantGarde } from '@eduact/ed-fonts';
import styled , {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family : 'AvantGrade';
    src : url(${AvantGarde.AvantGardeRegular});
}
`

function App() {
  return <>
  <GlobalStyles/>
  <Component />
  </>
}
```

