import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeArchtechtureDiagram } from '../../actions/solution_and_data';


const SADArchDiagramsUploadArchDiagramInput = () => {

  const dispatch = useDispatch();
  const onFileChange = event => {

    // const archtechtureDiagram = useSelector(state => state.sadReducers.sadArchtechtureDiagram);
    
    dispatch(changeArchtechtureDiagram(
              window.URL.createObjectURL(
              event.target.files[0]
            )))

  }

  return (
    <input id="input-diagram" type="file" 
        style={{display:"none"}}
        onChange={onFileChange}
        >
        
    </input>
  )
}

export default SADArchDiagramsUploadArchDiagramInput