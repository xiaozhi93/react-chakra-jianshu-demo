import React from 'react';
import {   
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LoginLayout from './layouts/loginLayout'
import Home from './views/home'
import Login from './views/login'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign_in">
            <LoginLayout>
              <Login />
            </LoginLayout>
          </Route>
          <Route exact path="/sign_up">
            <LoginLayout>
              <Login />
            </LoginLayout>
          </Route>
        </Switch>        
      </Router>
    </ChakraProvider>
  );
}

export default App;
