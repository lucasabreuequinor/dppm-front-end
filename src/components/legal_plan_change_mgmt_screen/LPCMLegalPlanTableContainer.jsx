import styled from 'styled-components'

const LPCMLegalPlanTableContainer = styled.div`

  display: grid;
  // grid-template-columns: repeat(8,minmax(max-content, 1fr));
  // grid-template-columns: repeat(2,minmax(max-content, 2fr)) repeat(6,minmax(max-content,1fr));
  grid-template-columns: repeat(1, 1fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 1fr);
  column-gap: .4rem;
  row-gap: .3rem;
  grid-template-rows: auto; 
  grid-auto-rows: auto;
  width: 100%;
  border-radius: .2rem;
  font-family: inherit;
  // color: #4d4c4c;
  color: #000000;
  box-sizing: border-box;
  font-size: .8rem;
  font-weight: bold;
  margin-top: 1.6rem;
  resize: none;
  // text-align: center;
}
`
export default LPCMLegalPlanTableContainer

