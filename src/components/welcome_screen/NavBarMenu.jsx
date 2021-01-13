import styled from 'styled-components'

const NavBarMenu = styled.ul.attrs(props => ({
  id: props.id,
  className: props.className
}))`

  @media only screen and (min-width: 1024px){
    display: block;
    position: inherit;
    width: auto;
    background: none;
    height: auto;
    display: flex;
    padding: 0;
    list-style: none;
  }

  `
export default NavBarMenu

