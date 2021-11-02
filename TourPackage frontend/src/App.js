import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import EventTasks from './components/Events/EventTasks';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Login/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

export const UserContext = createContext();

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Header />
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <PrivateRoute path="/events/:id">
                            <Register />
                        </PrivateRoute>
                        <Route exact path="/events">
                            <EventTasks />
                        </Route>
                        <Route path="/admin">
                            <AdminDashboard />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                   <Footer/>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
