import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{

    margin:0;
    padding:0;
}
::root{

--Marine-blue: hsl(213, 96%, 18%)
--Purplish-blue: hsl(243, 100%, 62%)
--Pastel-blue: hsl(228, 100%, 84%)
--Light-blue: hsl(206, 94%, 87%)
--Strawberry-red: hsl(354, 84%, 57%)

--Cool-gray: hsl(231, 11%, 63%)
--Light-gray: hsl(229, 24%, 87%)
--Magnolia: hsl(217, 100%, 97%)
--Alabaster: hsl(231, 100%, 99%)
--White: hsl(0, 0%, 100%)
}
body{
    margin:0;
    padding:0;
    overflow-x:hidden;
    font-family: 'Ubuntu', sans-serif;
    font-size:16px;
}
button{
    font: inherit;
    cursor:pointer;
}

`

export default GlobalStyle;