import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeDigitalProgramme } from '../../actions/create_project';

const CPDigitalProgrammeSelectStyled = styled.input`

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

const CPDigitalProgrammeSelect = () => {
  const digitalProgramme = useSelector(state => state.cpReducers.cpDigitalProgramme);
  const dispatch = useDispatch();

  return <CPDigitalProgrammeSelectStyled 
            value={digitalProgramme}
            onChange={(e) => dispatch(changeDigitalProgramme(e.target.value)) }
          />
}

export default CPDigitalProgrammeSelect



/*
    TEMPORARIAMENTE ESSE COMPONENTE VAI SER UM INPUT (ACIMA ^^)
    Na fase do backend esse campo vai voltar a ser um DropDown
*/
//import styled from 'styled-components'

// const CPDigitalProgrammeSelect = styled.select`

//   border: 1px solid #707070;
//   width: 100%;
//   padding: .5em;
//   border-radius: .2em;
//   font-weight: 500;
//   font-family: inherit;
//   color: #4d4c4c;


// `
// export default CPDigitalProgrammeSelect
