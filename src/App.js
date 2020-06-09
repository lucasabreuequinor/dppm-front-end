import React from 'react';
import { WelcomeScreen, 
  CreateProjectScreen,
  ChangeStoryScreen,
  SolutionAndDataScreen,
  BusinessCaseScreen,
  BusinessCaseItensScreen,
  ResourcePlanScreen,
  RiskRegisterScreen,
  LegalPlanChangeMgmtScreen } 
  
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
          <Route path={process.env.PUBLIC_URL + '/'} exact component={WelcomeScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project"} exact component={CreateProjectScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/change_story"} component={ChangeStoryScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/solution_and_data"} component={SolutionAndDataScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/business_case"} component={BusinessCaseScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/business_case_itens"} component={BusinessCaseItensScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/resource_plan"} component={ResourcePlanScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/risk_register"} component={RiskRegisterScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/legal_plan_change_mgmt"} component={LegalPlanChangeMgmtScreen}/>
        </Switch>
    </Router>  
  );
}

export default App;
