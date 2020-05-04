import styled from 'styled-components'

const BCKeyPerformanceIndicatorsTableContainer = styled.div`


  display: grid;
  grid-template-columns: repeat(8,minmax(max-content, 1fr));
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 25px;
  grid-auto-rows: 25px;
  border: 1px solid #707070;
  width: 100%;
  padding-top: .5em;
  padding: .5em;
  border-radius: .2em;
  font-family: 'Montserrat';
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;
  font-size: .7em;
  font-weight: bold;

  flex: 1;
  margin-top: .8em;
  resize: none;
}
`
export default BCKeyPerformanceIndicatorsTableContainer

