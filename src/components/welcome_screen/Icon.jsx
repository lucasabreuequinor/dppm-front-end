import styled, {css} from 'styled-components'

const hideBreakPoint = css`
  
  @media only screen and (min-width: 1024px){
    display: none;

  }

`;

const icons = {
  equinor_logo: require("../../images/equinor-logo.svg"),
  ham_logo: require("../../images/ham-logo.svg"),
  exit_menu_logo: require("../../images/exit-menu.svg"),
  folder_logo:   require("../../images/folder-logo.svg"),
  new_file_logo:  require("../../images/new-file-logo.png")

};


const Icon = styled.img.attrs(props => ({
    src: icons[props.name],
    alt: props.alt,
    id: props.id,

  }))`
  
  ${(props => props.hide_break_point ? hideBreakPoint: '')}
  cursor: ${props => props.cursor};
  align-self: center;
  width: ${props => props.width};
  visibility: ${ props => props.hidden ? 'hidden':'visible' };

  `

export default Icon

