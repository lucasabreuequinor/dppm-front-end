import styled from 'styled-components'

const CHFormsContainer = styled.form`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 250px 250px;
  grid-row-gap: 1.9em;
  margin-top: .8em;

  @media only screen and (min-width: 1230px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 400px;
    grid-row-gap: unset;
    grid-column-gap: 3em;
  }

`
export default CHFormsContainer

