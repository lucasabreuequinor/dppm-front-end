import styled from 'styled-components'

const BCFormAndCashFlowGraphicContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(900px, auto);
  grid-row-gap: 1.9rem;
  margin-top: .8rem;

  @media only screen and (min-width: 1230px){
    grid-template-columns: 2fr 1fr;
    grid-template-rows: minmax(600px, auto);
    grid-row-gap: unset;
    grid-column-gap: 3rem;
  }

`
export default BCFormAndCashFlowGraphicContainer

