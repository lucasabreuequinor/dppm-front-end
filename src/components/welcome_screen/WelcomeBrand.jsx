import styled from 'styled-components'

const WelcomeBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  

  h1 {
    margin: 0 0 0 1rem;
    font-size: 1.8rrem;

    @media only screen and (min-width: 875px){
      font-size: 2.4rrem;
      
    }

  }

  span {
    display:block;
  }

  @media only screen and (min-width: 875px){
    
    justify-content: flex-start;
  }


  `
export default WelcomeBrand

