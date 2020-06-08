import styled, {css} from 'styled-components'
import { Link } from "react-router-dom"


const StyledOptionLink = styled(Link)`

  align-self: flex-start;
  display: flex;
  align-items: center;
  padding: .3em 1rem;
  background-color: #007079;
  border-radius: .2rem;
  font-size: .9rem;
  text-decoration: none;
  color: white;

  & > span {
    margin-left: .5rem;
  }

`
export default StyledOptionLink


// &:visited{
//   color: unset;
// }
