import styled, {css} from 'styled-components'
import { Link } from "react-router-dom"


const StyledOptionLink = styled(Link)`

  align-self: flex-start;
  display: flex;
  align-items: center;
  padding: .5em 1em;
  background-color: #007079;
  border-radius: .2em;
  font-size: .9em;
  text-decoration: none;
  color: white;

  & > span {
    margin-left: .5em;
  }

`

export default StyledOptionLink


// &:visited{
//   color: unset;
// }

