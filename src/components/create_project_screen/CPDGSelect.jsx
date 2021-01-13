import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeDG } from '../../actions/create_project';

const CPDGSelectStyled = styled.select`

  border: 1px solid #707070;
  width: 100%;
  padding: .5rem;
  border-radius: .2rem;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;

`

const CPDGSelect = () => {
  const dg = useSelector(state => state.cpReducers.cpDG);
  const dispatch = useDispatch();

  const dgs = [
    {
      name:"Pre-DDG0 ideate",
      id:0
    },
    {
      name:"DDG0 – Reframe problem",
      id:1
    },
    {
      name:"DDG1/2 – Prototype & Build MVP",
      id:2    
    },
    {
      name:"DDG3 – Develop & Scale",
      id:3    
    },
    {
      name:"Drive Value",
      id:4
    }
  ]

  return <CPDGSelectStyled 
            value={dg}
            onChange={(e) => dispatch(changeDG(e.target.value)) }
          >

        {
            dgs.map(dg => 
              <option key={dg.id} value={dg.name}>
                {dg.name}
              </option>  
            )
        }       

          </CPDGSelectStyled>
}

export default CPDGSelect



/*
    TEMPORARIAMENTE ESSE COMPONENTE VAI SER UM INPUT (ACIMA ^^)
    Na fase do backend esse campo vai voltar a ser um DropDown
*/
//import styled from 'styled-components'

// const CPDGSelect = styled.select`

//   border: 1px solid #707070;
//   width: 100%;
//   padding: .5rem;
//   border-radius: .2rem;
//   font-weight: 500;
//   font-family: inherit;
//   color: #4d4c4c;


// `
// export default CPDGSelect
