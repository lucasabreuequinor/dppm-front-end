import styled, {css} from 'styled-components'
import { Link } from "react-router-dom"


const LPCMGeneratePDFButton = styled.button`
  box-sizing: content-box;
  font-family: inherit;
  background-color: #FF1243;
  border: none;
  color: white;
  padding: 1em 1rem;
  border-radius: .2rem;
  font-size: .9rem;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  text-align: center;
  font-weight: bold;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }

`

export default LPCMGeneratePDFButton
