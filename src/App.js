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
            <Login />
          </Route>
          <Route exact path="/sign_up">
            <Login />
          </Route>
        </Switch>        
      </Router>
    </ChakraProvider>
  );
}

export default App;
