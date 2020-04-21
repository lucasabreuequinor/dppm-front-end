import React from 'react';
import { WelcomeScreen, 
  CreateProjectScreen,
  ChangeStoryScreen } 
  
  from "./screens";

  import { HeaderContainer, Header, 
  WrapLogoLabelHeader,
  Icon, LabelHeader,
  NavBar,
  NavBarMenu,  
  ExitNavBarMenu,
  ItemNavBarMenu,
  StyledLink }
  from "./components/welcome_screen";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
        <HeaderContainer>
          <Header>
            <WrapLogoLabelHeader>
              <Icon width="32px" name="equinor_logo" alt="equinor logo" ></Icon>
              <LabelHeader>Create new project</LabelHeader>
            </WrapLogoLabelHeader>
            <NavBar>
              <Icon hide_break_point onClick={(event) => {console.log(event.target)}} cursor="pointer" width="32px" id="menu" name="ham_logo" alt="toggle menu" ></Icon>
              <NavBarMenu id="nav" className="hide-menu">
                <ExitNavBarMenu id="exit">
                  <Icon cursor="pointer" width="15px" name="exit_menu_logo" ></Icon>
                </ExitNavBarMenu>
                <ItemNavBarMenu>
                  <StyledLink>Link 1</StyledLink>                      
                </ItemNavBarMenu>
                <ItemNavBarMenu>
                  <StyledLink>Link 1</StyledLink>                      
                </ItemNavBarMenu>
                <ItemNavBarMenu>
                  <StyledLink>Link 1</StyledLink>                      
                </ItemNavBarMenu>
                <ItemNavBarMenu>
                  <StyledLink>Link 1</StyledLink>                      
                </ItemNavBarMenu>                            
              </NavBarMenu>
            </NavBar>
          </Header>
        </HeaderContainer>


        <Switch>
          <Route path="/" exact component={WelcomeScreen}/>
          <Route path="/create_project" exact component={CreateProjectScreen}/>
          <Route path="/create_project/change_story" component={ChangeStoryScreen}/>
        </Switch>
    </Router>  
  );
}

export default App;
