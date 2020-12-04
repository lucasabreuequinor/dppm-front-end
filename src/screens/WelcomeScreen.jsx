import React, { useState, useEffect } from 'react';
import { adalApiFetch } from '../adalConfig';
import { MainContainer,
         WelcomeContainer,
         WelcomeBrand,
         MainEquinorIcon,
         WelcomeOptions,
         WelcomeListProjects,
         WelcomeCreateProject,
         OptionIcon,
         StyledOptionLink } 
         from "../components/welcome_screen"
      

const WelcomeScreen = () => {
  const [userName, setUsername] = useState('Employee')

  useEffect(() => {
    adalApiFetch(fetch, 'https://graph.microsoft.com/v1.0/me', {})
      .then((response) => {
        response.json()
          .then((responseJson) => {
            setUsername(responseJson.displayName)
          });
      })
  }, []);

  return(
      <React.Fragment>
        <MainContainer>
          <WelcomeContainer>
            <WelcomeBrand>
              <MainEquinorIcon name="equinor-logo"></MainEquinorIcon>
              <h1>
                <span>
                  Welcome
                </span>
                  {userName}
              </h1>
            </WelcomeBrand>
          </WelcomeContainer>
          <WelcomeOptions>
                <div>
  
                  <WelcomeListProjects onClick={()=>{ alert('Feature coming soon!\n\n: )') }}>

                    <StyledOptionLink to="">
                    <OptionIcon name="folder_logo">
                    </OptionIcon>
                      <span>My projects</span>
                    </StyledOptionLink>

                  </WelcomeListProjects>
  
                  <WelcomeCreateProject>

                    <StyledOptionLink to={process.env.PUBLIC_URL + "/create_project"}>
                    <OptionIcon name="new_file_logo">
                    </OptionIcon>
                      <span>Create project</span>
                    </StyledOptionLink>

                  </WelcomeCreateProject>

                </div>
          </WelcomeOptions>
          
        </MainContainer>

      </React.Fragment>

    )
}

export default WelcomeScreen
