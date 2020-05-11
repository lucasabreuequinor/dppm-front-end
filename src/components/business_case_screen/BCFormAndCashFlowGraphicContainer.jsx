import styled from 'styled-components'

const BCFormAndCashFlowGraphicContainer = styled.form`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(900px, auto);
  grid-row-gap: 1.9em;
  margin-top: .8em;

  @media only screen and (min-width: 1230px){
    grid-template-columns: 2fr 1fr;
    grid-template-rows: minmax(600px, auto);
    grid-row-gap: unset;
    grid-column-gap: 3em;
  }

`
export default BCFormAndCashFlowGraphicContainer

