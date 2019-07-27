import React from 'react'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './contexts/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <ProtectedRoute path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
