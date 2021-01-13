import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeDigitalProgramme } from '../../actions/create_project';

const CPDigitalProgrammeSelectStyled = styled.select`

  border: 1px solid #707070;
  width: 100%;
  padding: .5rem;
  border-radius: .2rem;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;

`

const CPDigitalProgrammeSelect = () => {
  const digitalProgramme = useSelector(state => state.cpReducers.cpDigitalProgramme);
  const dispatch = useDispatch();
  
  const digitalProgrammes = [
    {
      name:"Digital SSU",
      id:0
    },
    {
      name:"Commercial Insight",
      id:1
    },
    {
      name:"Subsurface Analytics",
      id:2    
    },
    {
      name:"Digital Well Delivery",
      id:3    
    },
    {
      name:"Field of the Future",
      id:4
    },
    {
      name:"Data driven operations",
      id:5
    },
    {
      name:"Enablers",
      id:6
    }

  ]
  
  return <CPDigitalProgrammeSelectStyled 
            value={digitalProgramme}
            onChange={(e) => dispatch(changeDigitalProgramme(e.target.value)) } 
          >
  
        {
            digitalProgrammes.map(dp => 
              <option key={dp.id} value={dp.name}>
                {dp.name}
              </option>  
            )
        }       
  
  
          </CPDigitalProgrammeSelectStyled>          
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
//   padding: .5rem;
//   border-radius: .2rem;
//   font-weight: 500;
//   font-family: inherit;
//   color: #4d4c4c;


// `
// export default CPDigitalProgrammeSelect

