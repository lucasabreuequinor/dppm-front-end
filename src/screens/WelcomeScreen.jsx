import React from 'react'
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
      

class WelcomeScreen extends React.Component {

  render(){

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
                Lucas
              </h1>
            </WelcomeBrand>
          </WelcomeContainer>
          <WelcomeOptions>
                <div>
  
                  <WelcomeListProjects>

                    <StyledOptionLink to="">
                    <OptionIcon name="folder_logo">
                    </OptionIcon>
                      <span>My projects</span>
                    </StyledOptionLink>

                  </WelcomeListProjects>
  
                  <WelcomeCreateProject>

                    <StyledOptionLink to="create_project">
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
}

export default WelcomeScreen
