import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: .6em 1.2rem;

  @media only screen and (min-width: 650px){
    width: 80%;
    margin: 0 auto;  
  }

  @media only screen and (min-width: 1600px) {
    width: 70%;
  }

`

export default Header