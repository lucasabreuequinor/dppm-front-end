import styled from 'styled-components'

const NavBarMenu = styled.ul.attrs(props => ({
  id: props.id,
  className: props.className
}))`
  position: fixed;
  width: 50%; 
  top: 0;
  right: 0;
  text-align: left;
  background-color: rgb(36,41,44);
  height: 100%;
  padding: 3em 0 0 0;
  list-style-type: none;
  margin: 0;

  @media only screen and (min-width: 650px){
  
    width: 40%;

  }


  @media only screen and (min-width: 1024px){
    display: block;
    position: inherit;
    width: auto;
    background: none;
    height: auto;
    display: flex;
    padding-top: 0;
    
  }

  `
export default NavBarMenu

