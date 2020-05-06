import React from 'react';
import { WelcomeScreen, 
  CreateProjectScreen,
  ChangeStoryScreen,
  SolutionAndDataScreen,
  BusinessCaseScreen } 
  
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



        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={WelcomeScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project"} exact component={CreateProjectScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/change_story"} component={ChangeStoryScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/solution_and_data"} component={SolutionAndDataScreen}/>
          <Route path={process.env.PUBLIC_URL + "/create_project/business_case"} component={BusinessCaseScreen}/>
        </Switch>
    </Router>  
  );
}

export default App;
