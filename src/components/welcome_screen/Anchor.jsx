import styled from 'styled-components'

const Anchor = styled.a.attrs(props => ({
  href: props.href
}))

export default Anchor

