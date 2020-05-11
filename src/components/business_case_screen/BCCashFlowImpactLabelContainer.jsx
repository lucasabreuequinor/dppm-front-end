import styled from 'styled-components'

const BCCashFlowImpactLabelContainer = styled.div`

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 50%;
  margin-top: 1.9em;


  @media only screen and (min-width: 350px){

    input{
      width: auto;
    }
  }


  @media only screen and (min-width: 1230px){
    margin-top: 0;
    margin-left: 1.9em;
  }
  
}
`
export default BCCashFlowImpactLabelContainer


