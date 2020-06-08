import styled from 'styled-components'

const minus_logo = require("../../images/minus-logo.svg")

const BCItemsCostPerYearDeleteCostItemButton = styled.button`

  width: 28px;
  height: 28px;
  background-image: url(${minus_logo});
  font-family: inherit;

  background-color: transparent; /* make the button transparent */
  background-repeat: no-repeat;  /* make the background image appear only ondce */
  border: none;           /* assuming we don't want any borders */
  cursor: pointer;        /* make the cursor like hovering over an <a> element */

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }

}
`
export default BCItemsCostPerYearDeleteCostItemButton

