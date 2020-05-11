import styled from 'styled-components'

const BCKeyPerformanceIndicatorsTableContainer = styled.div`


  display: grid;
  // grid-template-columns: repeat(8,minmax(max-content, 1fr));
  // grid-template-columns: repeat(2,minmax(max-content, 2fr)) repeat(6,minmax(max-content,1fr));
  grid-template-columns: repeat(2,2fr) repeat(6,1fr);
  column-gap: .2em;
  row-gap: .3em;
  grid-template-rows: 25px;
  grid-auto-rows: 28px;
  width: 100%;
  border-radius: .2em;
  font-family: inherit;
  // color: #4d4c4c;
  color: #000000;
  box-sizing: border-box;
  font-size: .8em;
  font-weight: bold;
  margin-top: .8em;
  resize: none;
}
`
export default BCKeyPerformanceIndicatorsTableContainer

