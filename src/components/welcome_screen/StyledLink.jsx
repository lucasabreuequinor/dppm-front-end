import styled, {css} from 'styled-components'
import { Link } from "react-router-dom"


const StyledLink = styled(Link)`

  color: white;
  text-decoration: none;
  display:block;
  width: 100%;
  padding: 1em 2em;
  background-color: rgb(49,55,59);

  &::hover {
    background-color: rgb(65, 73, 78);
  }

  @media only screen and (min-width: 1024px){
    color: black;
    background-color: inherit;
    text-align: right;

    &::hover {
      background-color: rgb(65,73,78);
      
    }

  }

`



export default StyledLink

