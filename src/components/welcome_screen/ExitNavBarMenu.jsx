import styled from 'styled-components'

const ExitNavBarMenu = styled.li.attrs(props => ({
  id: props.id
}))`

    margin-bottom: 1em;
    margin-top: -1.3em;
    text-align: right;
    padding: 0 1.4em;

    @media only screen and (min-width: 1024px){
      display none;
    }


  }

  `
export default ExitNavBarMenu

