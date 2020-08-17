import React from 'react';
import styled from "styled-components";
import { WelcomeScreen, 
  CreateProjectScreen,
  ChangeStoryScreen,
  SolutionAndDataScreen,
  BusinessCaseScreen,
  BusinessCaseItensScreen,
  ResourcePlanScreen,
  RiskRegisterScreen,
  LegalPlanChangeMgmtScreen,
  ProjectPlanScreen,
  BusinessCaseRealizationPlanScreen } 
  
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

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

        <Container />
    </Router>  
  );
}

function Container({location}) {
  return (
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter:300, exit: 300 }}
            classNames={'fade'}
          >
            <section className="route-section">
              <Switch location={location}>
                        <Route path={process.env.PUBLIC_URL + '/'} exact component={WelcomeScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project"} exact component={CreateProjectScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/change_story"} component={ChangeStoryScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/solution_and_data"} component={SolutionAndDataScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/business_case"} component={BusinessCaseScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/business_case_itens"} component={BusinessCaseItensScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/resource_plan"} component={ResourcePlanScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/risk_register"} component={RiskRegisterScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/legal_plan_change_mgmt"} component={LegalPlanChangeMgmtScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/project_plan"} component={ProjectPlanScreen}/>
                        <Route path={process.env.PUBLIC_URL + "/create_project/business_case_realization_plan"} component={BusinessCaseRealizationPlanScreen}/>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>  
      </Wrapper>  
  )
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }

    div.transition-group {
      position: relative;
   }

   section.route-section {
     position: absolute;
     width: 100%;
     top: 0;
     left: 0;
   }    

`;

Container = withRouter(Container)


export default App;
