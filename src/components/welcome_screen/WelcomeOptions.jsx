import styled from 'styled-components'

const WelcomeOptions = styled.div`
    text-align:center;
    margin-top: 10rem;
    margin-bottom: 6rem;

    & > div {
    display: inline-flex;
    flex-direction: column;
    
    }

    @media only screen and (min-width: 875px){
      text-align: left;
    }

  `
export default WelcomeOptions

