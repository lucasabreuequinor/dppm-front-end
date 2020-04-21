import styled from 'styled-components'


const equinor_logo = require("../../images/equinor-logo.svg")

const MainEquinorIcon = styled.img.attrs(props => ({
  src: equinor_logo,
  alt: props.alt,
}))`

  width: 50px;

  @media only screen and (min-width: 875px){
    width: 80px;
  }

}
`
export default MainEquinorIcon

