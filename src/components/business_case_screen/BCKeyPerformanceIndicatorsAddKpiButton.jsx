import styled from 'styled-components'

const add_logo = require("../../images/plus-logo.svg")

const BCKeyPerformanceIndicatorsAddKpiButton = styled.button`

  width: 125px;
  background-image: url(${add_logo});
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
export default BCKeyPerformanceIndicatorsAddKpiButton

