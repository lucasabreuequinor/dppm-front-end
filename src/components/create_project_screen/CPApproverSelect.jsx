import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeApprover } from '../../actions/create_project';

const CPApproverSelectStyled = styled.input`

  border: 1px solid #707070;
  width: 100%;
  padding-top: .5em;
  padding: .5em;
  border-radius: .2em;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;

`

const CPApproverSelect = () => {
  const approver = useSelector(state => state.cpReducers.cpApprover);
  const dispatch = useDispatch();

  return <CPApproverSelectStyled 
            value={approver}
            onChange={(e) => dispatch(changeApprover(e.target.value)) }
          />
}

export default CPApproverSelect



/*
    TEMPORARIAMENTE ESSE COMPONENTE VAI SER UM INPUT (ACIMA ^^)
    Na fase do backend esse campo vai voltar a ser um DropDown
*/
//import styled from 'styled-components'

// const CPApproverSelect = styled.select`

//   border: 1px solid #707070;
//   width: 100%;
//   padding: .5em;
//   border-radius: .2em;
//   font-weight: 500;
//   font-family: inherit;
//   color: #4d4c4c;


// `
// export default CPApproverSelect
