import styled from 'styled-components'


const icons = {

  folder_logo:   require("../../images/folder-logo.svg"),
  new_file_logo:  require("../../images/new-file-logo.svg")
}

const OptionIcon = styled.img.attrs(props => ({
  src: icons[props.name]

}))`
  width: 26px;


  `
export default OptionIcon

